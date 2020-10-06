import { Component } from '@angular/core';
import { SearchResultAggregate } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public searchResultAggregate: SearchResultAggregate[];

  public updateSearchedRecipient(aggregate: SearchResultAggregate[]): void {
    this.searchResultAggregate = aggregate;
  }
}
