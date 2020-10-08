import { Component } from '@angular/core';
import { Page } from '../search/search.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public page: Page;

  public updateSearchedRecipient(page: Page): void {
    this.page = page;
  }
}
