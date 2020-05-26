import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  searchString: String;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchString = this.activatedRoute.snapshot.queryParams['searchString']

    console.log(this.searchString);
  }

}
