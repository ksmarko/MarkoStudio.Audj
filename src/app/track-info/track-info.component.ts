import { Component, OnInit, Input } from '@angular/core';
import { TrackStatisticsSearchService, TrackSearchResponse } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() record: TrackSearchResponse;

  public isOnFirstPage: boolean;

  public errorMessage: string = '';

  constructor(
    private trackStatisticsSearchService: TrackStatisticsSearchService
  ) { }

  ngOnInit(): void {
    let pageNumber = 1;
    let pageSize = 30;

    this.trackStatisticsSearchService.searchProfile(this.record.name, pageNumber, pageSize).subscribe(result => {
      this.isOnFirstPage = result.matches.some(x => x.author_username == this.record.author_username && x.name == this.record.name);
    }, error => {
      this.errorMessage = error.error;
    });
  }
}
