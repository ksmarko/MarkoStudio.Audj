import { Component, OnInit, Input } from '@angular/core';
\import { TrackStatisticsSearchService, TrackSearchResponse } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() records: string[];

  public errorMessage: string = '';

  constructor(
    private trackStatisticsSearchService: TrackStatisticsSearchService
  ) { }

  ngOnInit(): void {
  }

  public async detectFirstPage(track: TrackSearchResponse): Promise<boolean> {
    let pageNumber = 1;
    let pageSize = 30;

    let isOnFirstPage = false;

    await this.trackStatisticsSearchService.searchProfile(track.name, pageNumber, pageSize).toPromise().then(result => {
      isOnFirstPage = result.matches.some(x => x.author_username == track.author_username);
    }, error => {
      this.errorMessage = error.error;
    });

    return isOnFirstPage;
  }
}
