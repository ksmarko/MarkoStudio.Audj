import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TrackStatisticsSearchService, TrackSearchResponse, TracksPageResponse } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output('userChange') userChangeEmitter: EventEmitter<Page> = new EventEmitter<Page>();

  private userNameControl: AbstractControl;
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
    });

    this.userNameControl =  this.searchProfile.get('userName');

    this.errorMessage = "";
    this.infoMessage = "";
    this.allTracksCount = 0;
    this.handledTracksCount = 0;
  }

  public composeResult(): void {
    let userName = this.userNameControl.value;

    this.allTracksCount = 0;
    this.handledTracksCount = 0;
    this.errorMessage = '';
    this.infoMessage = '';
    this.userChangeEmitter.emit(null); 
    this.isLoading = true;

    let pageNumber = 1;
    let pageSize = 30;

    this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, pageSize)
    .pipe(mergeMap(page => {
      let pages : Observable<TracksPageResponse>[] = new Array<Observable<TracksPageResponse>>();
      let totalPages = Math.ceil(page.total_hits / pageSize) + 1;

      for (let p = pageNumber + 1; p < totalPages; p++){

        let item = this.trackStatisticsSearchService.getTracksPage(userName, p, pageSize);
        pages.push(item);
      }

      return forkJoin(pages).pipe(mergeMap(c => {
        let matches = new Array<TrackSearchResponse>().concat(...c.concat(page).map(item => item.matches));

        this.allTracksCount = matches.length;

        let recordsObservables = matches.map(track => {

          return this.trackStatisticsSearchService.searchProfile(track.name, 1, 30)
          .pipe(map(r => {
  
            this.handledTracksCount++;

            let isOnFirstPage = r.matches.some(match => match.author_username == track.author_username && match.name == track.name);
  
            return new Record(track.name, track.url, isOnFirstPage);
          }));
        });


        let numberOfObjects = 1 // <-- decides number of objects in each group

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

  // todo: wait....

    //console.log(`time reached: index num ${i}`);

    records = records.pipe(mergeMap(r => forkJoin(groupedProducts[i]).pipe(map(p => p.concat(r)))));
}

        return records.pipe(map(tr => {
            return new Page(null, 0, tr);
        }));
      }));
    }))
    .subscribe(result => {
      this.isLoading = false;

      console.log(`Records count: ${result.records.length}`);

      let allTracksCount = result.records.length;

      let distinct = result.records
        .filter((value, index, self) => self.map(x => x.trackUrl).indexOf(value.trackUrl) === index);

        if (distinct.length != result.records.length){
          console.log(`Distinct records count: ${distinct.length}`);
          result.records = distinct;
        }

      let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);

      let nonTrendingTracksCount = notFirstPage.length;

      if (allTracksCount != nonTrendingTracksCount)
        this.infoMessage = `Всього треків: ${allTracksCount}. Не на першій сторінці пошуку: ${nonTrendingTracksCount}`;

        result.records = notFirstPage;

      this.userChangeEmitter.emit(result);
    }, error => {

      this.isLoading = false;

      if (error.status == 404)
        this.errorMessage = 'Сторінка не знайдена';

      if (error.status >= 400)
        this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';

      this.userChangeEmitter.emit(null);
    });
  }
}

export class Page {
  links: Links;
  totalHits: number;
  records: Record[];

  constructor(links: Links, totalHits: number, records: Record[]){
    this.links = links;
    this.totalHits = totalHits;
    this.records = records;
  }
}

export class Record {
  trackName: string;
  trackUrl: string;
  isOnFirstPage: boolean;

  constructor(trackName: string, trackUrl: string, isOnFirstPage: boolean){
    this.trackName = trackName;
    this.trackUrl = trackUrl;
    this.isOnFirstPage = isOnFirstPage;
  }
}

export class Links {
  next_page_url: string;
  prev_page_url: string;
  first_page_url: string;
  last_page_url: string;

  constructor(next_page_url: string, prev_page_url: string, first_page_url: string, last_page_url: string){
    this.next_page_url = next_page_url;
    this.prev_page_url = prev_page_url;
    this.first_page_url = first_page_url;
    this.last_page_url = last_page_url;
  }
}
