import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString: String;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Redirects to results page
   */
  navigateToResults(): void {
    this.router.navigate(['/results'], {queryParams: {searchString: this.searchString}});
  }

  /**
   * Does the search when the enter is pressed
   * @param event KeyboardEvent
   */
  getEnterPressed(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      event.preventDefault();
      this.router.navigate(['/results'], {queryParams: {searchString: this.searchString}});
    }
  }

}
