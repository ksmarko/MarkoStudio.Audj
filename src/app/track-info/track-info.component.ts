import { Component, OnInit, Input } from '@angular/core';
import { SearchResultAggregate } from '../search/search.component';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {

  @Input() records: SearchResultAggregate[];

  constructor() { }

  ngOnInit(): void {
  }

}
