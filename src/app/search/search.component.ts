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

  navigateToResults(): void {
    console.log(this.searchString);

    this.router.navigate(['/results'], {queryParams: {searchString: this.searchString}});
  }

}
