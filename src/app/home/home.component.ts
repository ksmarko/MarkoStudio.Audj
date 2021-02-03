import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TrackStatisticsSearchService } from '../services/track-statistics-search.service';

import { GoogleAnalyticsService } from '../services/google-analytics.service';

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
  public availableItemsPerPage: Array<number> = [10, 30, 50, 100];

  private userNameControl: AbstractControl;
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
    private googleAnalyticsService: GoogleAnalyticsService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchProfile = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern('[^\w]'), Validators.nullValidator]],
      itemsPerPage: [null],
    });

    this.userNameControl =  this.searchProfile.get('userName');
    this.itemsPerPageControl =  this.searchProfile.get('itemsPerPage');

    this.errorMessage = "";
    this.infoMessage = "";
    this.allTracksCount = 0;
    this.handledTracksCount = 0;
  }

  public getNextPageResults(pageNumber: number) : void {
    let userName = this.userNameControl.value;
    let itemsInParallel = 10;

    this.pageSize = this.itemsPerPageControl.value || 30;
    this.allTracksCount = 0;
    this.handledTracksCount = 0;
    this.errorMessage = '';
    this.infoMessage = '';
    this.isLoading = true;
    this.tracksPage = null;

    this.googleAnalyticsService.eventEmitter(
      "page_results", 
      "page", 
      "getNextPageResults", 
      `Username: ${userName}, pageNumber: ${pageNumber}, pageSize: ${this.pageSize}, itemsInParallel: ${itemsInParallel}, date: ${new Date()}`
    );

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
        
            return new Record(track.id, track.name, track.published_at, track.url, isOnFirstPage);
          }), catchError(err => {
            this.errorMessage = 'Забагато запитів. Спробуйте пізніше, зменшивши кількість одночасних запитів і кількість треків на сторінці';

            this.googleAnalyticsService.eventEmitter(
              "page_results", 
              "error", 
              "error_during_searching_track", 
              `Username: ${userName}, pageNumber: ${pageNumber}, pageSize: ${this.pageSize}, itemsInParallel: ${itemsInParallel}, date: ${new Date()}`
            );

            return throwError(err);
          }));
        });
      
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

        this.googleAnalyticsService.eventEmitter(
          "page_results", 
          "error", 
          "error_during_fetching_user_tracks", 
          `Username: ${userName}, pageNumber: ${pageNumber}, pageSize: ${this.pageSize}, itemsInParallel: ${itemsInParallel}, date: ${new Date()}`
        );

        return throwError(err);
    }))
      .subscribe(result => {
        this.isLoading = false;

        result.records = result.records.slice().sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

        let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);

        let allTracksCount = result.records.length;
        let nonTrendingTracksCount = notFirstPage.length;

        if (allTracksCount != nonTrendingTracksCount)
          this.infoMessage = `Не на першій сторінці пошуку: ${nonTrendingTracksCount} із ${allTracksCount}`;
  
          this.currentPage = pageNumber;
          this.tracksPage = result;
      }, error => {

        this.isLoading = false;

        if (error.status == 404)
          this.errorMessage = 'Сторінка не знайдена';
  
        if (error.status >= 400)
          this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
  
        this.tracksPage = null;

        this.googleAnalyticsService.eventEmitter(
          "page_results", 
          "error", 
          "general_error", 
          `Username: ${userName}, pageNumber: ${pageNumber}, pageSize: ${this.pageSize}, itemsInParallel: ${itemsInParallel}, date: ${new Date()}, errorCode: ${error.status}`
        );
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
  publishedAt: string;
  trackUrl: string;
  isOnFirstPage: boolean;

  constructor(id: number, trackName: string, publishedAt: string, trackUrl: string, isOnFirstPage: boolean){
    this.id = id;
    this.trackName = trackName;
    this.publishedAt = publishedAt;
    this.trackUrl = trackUrl;
    this.isOnFirstPage = isOnFirstPage;
  }
}