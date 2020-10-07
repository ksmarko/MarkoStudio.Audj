import { Component } from '@angular/core';
import { TrackSearchResponse } from '../services/track-statistics-search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public tracks: TrackSearchResponse[];

  public updateSearchedRecipient(tracks: TrackSearchResponse[]): void {
    this.tracks = tracks;
  }
}
