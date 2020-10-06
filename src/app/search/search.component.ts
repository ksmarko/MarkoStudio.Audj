import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { TrackSearchResult, TrackStatisticsSearchService } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output('userChange') userChangeEmitter: EventEmitter<SearchResultAggregate[]> = new EventEmitter<SearchResultAggregate[]>();

  private userNameControl: AbstractControl;
  private termSearchControl: AbstractControl;
  public searchProfile: FormGroup;

  public errorMessage: string;

  constructor(
    private trackStatisticsSearchService: TrackStatisticsSearchService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchProfile = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern('[^\w]'), Validators.nullValidator]],
      termSearch: [null],
    });

    this.userNameControl =  this.searchProfile.get('userName');
    this.termSearchControl = this.searchProfile.get('termSearch');
  }

  public composeResult(): void {
    let userName = 'ToucanMusic';//this.userNameControl.value;
    let terms = 'Lounge Background'; //this.termSearchControl.value;
    let pageNumber = 1;
    let pageSize = 50;
    let aggregateResult: SearchResultAggregate[] = [];
    let pagesCount;

    this.trackStatisticsSearchService.getTotalMatches(terms).subscribe(result => {   // todo: wait 1
      pagesCount = Math.ceil(result.total_hits / pageSize);

      pagesCount = 1; // todo: remove after testing
    }, error => {

      if (error.status == 404)
        this.errorMessage = 'Сторінка не знайдена';

      if (error.status >= 400)
        this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';

      this.userChangeEmitter.emit(null);
    });

    for (let page = pageNumber; page <= pagesCount; page++){
      this.trackStatisticsSearchService.searchProfile(terms, page, pageSize).subscribe(result => {   // todo: wait 2
        let matches = result.matches
          .filter(m => m.author_username == userName)
          .map(m => this.toSearchResultAggregate(m, page));
  
        aggregateResult.concat(matches);
      }, error => {
  
        if (error.status == 404)
          this.errorMessage = 'Сторінка не знайдена';
  
        if (error.status >= 400)
          this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
  
        this.userChangeEmitter.emit(null);
      });
    }

    this.userChangeEmitter.emit(aggregateResult); // todo: do after all subscriptions results
  }

  private toSearchResultAggregate(item: TrackSearchResult, pageNumber: number): SearchResultAggregate {
    return {
      trackName: item.name,
      trackUrl: item.url,
      pageNumber: pageNumber
    };
  }
}

export class SearchResultAggregate{
  trackName: string;
  trackUrl: string;
  pageNumber: number;
}
