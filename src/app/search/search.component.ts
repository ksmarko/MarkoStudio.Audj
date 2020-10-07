import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { TrackStatisticsSearchService, TrackSearchResponse } from '../services/track-statistics-search.service';

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
  }

  public composeResult(): void {
    let userName = this.userNameControl.value;

    this.errorMessage = '';
    this.infoMessage = '';
    this.userChangeEmitter.emit(null); 
    this.isLoading = true;

    let pageNumber = 1;
    let pageSize = 30;

    this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, pageSize)
      .pipe(mergeMap(page => {
      
        let records = forkJoin(page.matches.map(track => {

          return this.trackStatisticsSearchService.searchProfile(track.name, 1, 30)
          .pipe(map(r => {

            let isOnFirstPage = r.matches.some(match => match.author_username == track.author_username && match.name == track.name);

            return new Record(track.name, track.url, isOnFirstPage);
          }));
        }));

        return records.pipe(map(tr => {

          let links = new Links(page.links.next_page_url, page.links.prev_page_url, page.links.first_page_url, page.links.last_page_url);

          return new Page(links, page.total_hits, tr);
        }));
      }))
      .subscribe(result => {
        this.isLoading = false;

        let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);

        let allTracksCount = result.records.length;
        let nonTrendingTracksCount = notFirstPage.length;

        if (allTracksCount != nonTrendingTracksCount)
          this.infoMessage = `Showing ${nonTrendingTracksCount} of ${allTracksCount}`;
  
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
