import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBooksService } from '../services/search-books.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  searchString: String;
  books: Book[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private searchBooksService: SearchBooksService) { }

  ngOnInit(): void {
    this.searchString = this.activatedRoute.snapshot.queryParams['searchString'];

    this.searchFreeBooks();
  }

  processNewSearch(): void {
    this.books = [];
    this.searchFreeBooks();
  }

  searchFreeBooks(): void {
    this.searchBooksService.getFreeBooks(this.searchString).subscribe((data) => {
      this.books.push(...data);
    });    
  }

}
