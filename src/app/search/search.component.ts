import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { TrackStatisticsSearchService, TrackSearchResponse } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output('userChange') userChangeEmitter: EventEmitter<TrackSearchResponse[]> = new EventEmitter<TrackSearchResponse[]>();

  private userNameControl: AbstractControl;
  public searchProfile: FormGroup;

  public errorMessage: string;

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
  }

  public composeResult(): void {
    let userName = this.userNameControl.value;

    this.errorMessage = '';
    this.userChangeEmitter.emit(null); 
    this.isLoading = true;

    this.trackStatisticsSearchService.getTrackNames(userName).subscribe(result => {
      this.isLoading = false;

      this.userChangeEmitter.emit(result);
    }, error => {
      if (error.status == 404)
        this.errorMessage = 'Сторінка не знайдена';

      if (error.status >= 400)
        this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';

      this.userChangeEmitter.emit(null);
    });
  }
}
