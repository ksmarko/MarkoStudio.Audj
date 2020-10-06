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
  private tagsSearchControl: AbstractControl;
  public searchProfile: FormGroup;

  public errorMessage: string;
  public informationMessage: string;

  constructor(
    private trackStatisticsSearchService: TrackStatisticsSearchService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.searchProfile = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern('[^\w]'), Validators.nullValidator]],
      termSearch: [null],
      tagsSearch: [null],
    });

    this.userNameControl =  this.searchProfile.get('userName');
    this.termSearchControl = this.searchProfile.get('termSearch');
    this.tagsSearchControl = this.searchProfile.get('tagsSearch');

    this.errorMessage = "";
    this.informationMessage = "";
  }

  public async composeResult(): Promise<void> {
    let userName = this.userNameControl.value;
    let terms = this.termSearchControl.value;
    let tags = this.tagsSearchControl.value;
    let pageNumber = 0;
    let pageSize = 30;
    let aggregateResult: SearchResultAggregate[] = [];
    let pagesCount = 1;

    this.errorMessage = '';
    this.informationMessage = '';
    this.userChangeEmitter.emit(null); 

      do {
        await this.trackStatisticsSearchService.searchProfile(terms, tags, ++pageNumber, pageSize).toPromise().then(
          result => {
            pagesCount = 10; // max pages count for now
            // Math.ceil(result.total_hits / pageSize); 

            let matches = result.matches
              .filter(m => m.author_username == userName)
              .map(m => this.toSearchResultAggregate(m, pageNumber));
      
              if (matches.length > 0){
                aggregateResult.push(matches.pop());
              }
          }, error => {
      
            if (error.status == 404)
              this.errorMessage = 'Сторінка не знайдена';
      
            if (error.status >= 400)
              this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
      
            this.userChangeEmitter.emit(null);
          }
        );
      }
      while (pageNumber != pagesCount);

      // let example = {
      //   trackName: 'A Corporate Motivational',
      //   trackUrl: 'https://audiojungle.net/item/a-corporate-motivational/28409916',
      //   pageNumber: 10
      // };

      // aggregateResult.push(example);

      if (aggregateResult.length > 0){
        this.userChangeEmitter.emit(aggregateResult); 
      }
      else {
        this.informationMessage = `Перші ${pagesCount} сторінок не містять результатів за обраними критеріями`;
      }
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
