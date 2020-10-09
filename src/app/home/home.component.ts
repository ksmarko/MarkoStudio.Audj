import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TrackStatisticsSearchService } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tracksPage: Page;

  public totalTracksCount: number;
  public currentPage: number = 1;
  public pageSize: number = 30;
  public availableParallelizationItems: Array<number> = [1,2,3,4,5,6,7,8,9,10];
  public availableItemsPerPage: Array<number> = [10, 30, 50, 100];

  private userNameControl: AbstractControl;
  private itemsInParallelControl: AbstractControl;
  private itemsPerPageControl: AbstractControl;
  public searchProfile: FormGroup;

  public errorMessage: string;
  public infoMessage: string;

  public isLoading: boolean = false;

  public allTracksCount: number = 0;
  public handledTracksCount: number = 0;

  public usernameExists: string;

  constructor(
    private trackStatisticsSearchService: TrackStatisticsSearchService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchProfile = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern('[^\w]'), Validators.nullValidator]],
      itemsInParallel: [null],
      itemsPerPage: [null],
    });

    this.userNameControl =  this.searchProfile.get('userName');
    this.itemsInParallelControl =  this.searchProfile.get('itemsInParallel');
    this.itemsPerPageControl =  this.searchProfile.get('itemsPerPage');

    this.errorMessage = "";
    this.infoMessage = "";
    this.allTracksCount = 0;
    this.handledTracksCount = 0;
  }

  public getNextPageResults(pageNumber: number) : void {
    let userName = this.userNameControl.value;
    let itemsInParallel = this.itemsInParallelControl.value || 3;

    this.pageSize = this.itemsPerPageControl.value || 50;
    this.allTracksCount = 0;
    this.handledTracksCount = 0;
    this.errorMessage = '';
    this.infoMessage = '';
    this.isLoading = true;
    this.tracksPage = null;

    console.log(`Page size ${this.pageSize}`);

    this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, this.pageSize)
      .pipe(mergeMap(page => {
      
        this.totalTracksCount = page.total_hits;
        this.allTracksCount = page.matches.length;

        let recordsObservables = page.matches.map(track => {

          return this.trackStatisticsSearchService.searchProfile(track.name, 1, 30)
          .pipe(map(r => {
        
            this.handledTracksCount++;
      
            let isOnFirstPage = r.matches.some(match => match.author_username == track.author_username && match.name == track.name);
        
            return new Record(track.id, track.name, track.url, isOnFirstPage);
          }), catchError(err => {
            this.errorMessage = 'Забагато запитів. Спробуйте пізніше, зменшивши кількість одночасних запитів і кількість треків на сторінці';
            return throwError(err);
          }));
        });
      
        console.log(`Items in parallel: ${itemsInParallel}`);

        let numberOfObjects = itemsInParallel; // <-- decides number of objects in each group
      
        let groupedProducts = recordsObservables.reduce((resultArray: Observable<Record>[][], item: Observable<Record>, index: number) => { 
          
          const chunkIndex = Math.floor(index/numberOfObjects);
      
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
          }
      
          resultArray[chunkIndex].push(item);
      
          return resultArray;
        }, []);
      
        let records = forkJoin(groupedProducts[0]);
      
        for (let i = 1; i < groupedProducts.length; i++){
          records = records.pipe(mergeMap(r => forkJoin(groupedProducts[i]).pipe(map(p => p.concat(r)))));
        }
      
        return records.pipe(map(tr => {
          return new Page(page.total_hits, tr);
        }));
      }), catchError(err => {
        console.log('Error during fetching user tracks ', err);
        this.errorMessage = 'Забагато запитів. Спробуйте пізніше';
        return throwError(err);
    }))
      .subscribe(result => {
        this.isLoading = false;

        result.records = result.records.sort((a, b) => a.trackName.localeCompare(b.trackName));

        let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);

        let allTracksCount = result.records.length;
        let nonTrendingTracksCount = notFirstPage.length;

        if (allTracksCount != nonTrendingTracksCount)
          this.infoMessage = `Не на першій сторінці пошуку: ${nonTrendingTracksCount} із ${allTracksCount}`;
  
          //result.records = notFirstPage;

          this.currentPage = pageNumber;
          this.tracksPage = result;
      }, error => {

        this.isLoading = false;

        if (error.status == 404)
          this.errorMessage = 'Сторінка не знайдена';
  
        if (error.status >= 400)
          this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
  
        this.tracksPage = null;
    });
  }
}

export class Page {
  totalHits: number;
  records: Record[];

  constructor(totalHits: number, records: Record[]){
    this.totalHits = totalHits;
    this.records = records;
  }
}

export class Record {
  id: number;
  trackName: string;
  trackUrl: string;
  isOnFirstPage: boolean;

  constructor(id: number,trackName: string, trackUrl: string, isOnFirstPage: boolean){
    this.id = id;
    this.trackName = trackName;
    this.trackUrl = trackUrl;
    this.isOnFirstPage = isOnFirstPage;
  }
}