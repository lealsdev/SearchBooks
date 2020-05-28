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

    this.processNewSearch();
  }

  /**
   * Starts a new search for books using startIndex=0
   */
  processNewSearch(): void {
    this.books = [];
    this.searchFreeBooks();
  }

  /**
   * Search for books using pagination based on the current list of books' length
   */
  searchFreeBooks(): void {
    this.searchBooksService.getFreeBooks(this.searchString, this.books.length).subscribe(
      (data) => {
        this.books.push(...data);
      }, 
      (error) => {
        alert('Bad, bad server. No donut for you! Do you recognize this phrase? Please, try again.');
      });    
  }

  /**
   * Does the search when the enter is pressed
   * @param event KeyboardEvent
   */
  getEnterPressed(event: KeyboardEvent) {
    if(event.key === 'Enter') {
      event.preventDefault();
      this.processNewSearch();
    }
  }

}
