import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../models/book';
import { Author } from '../models/author';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchBooksService {

  constructor(private http: HttpClient) { }

  /**
   * Returns free books information based on the search criteria
   * @param searchString The string to be searched by the api
   */
  public getFreeBooks(searchString: String): Observable<Book[]> {

    const url = `${environment.googleApi.getBooks}?q=${searchString}&filter=free-ebooks&projection=lite&maxResults=10`;

    return this.http.get<Book[]>(url).pipe<Book[]>(map((data) => {

      const books: Book[] = this.convertGoogleServiceBooksToBooksModel(data['items']);

      return books;

    }));
  }

  /**
   * Converts the books returned by the api to a book entity model array.
   * @param booksFromService The list of books returned by the api.
   */
  private convertGoogleServiceBooksToBooksModel(booksFromService: Object[]): Book[] {
    
    const books: Book[] = new Array(booksFromService.length);

    let book = new Book();

    for(let i = 0; i < booksFromService.length; ++i) {

      book = new Book();

      book.canonicalVolumeLink = booksFromService[i]['volumeInfo'].canonicalVolumeLink;

      book.pdfDownloadLink = booksFromService[i]['accessInfo'].pdf?.downloadLink;
      book.epubDownloadLink = booksFromService[i]['accessInfo'].epub?.downloadLink;

      book.title = booksFromService[i]['volumeInfo'].title;
      book.subtitle = booksFromService[i]['volumeInfo'].subtitle;
      
      book.publishedDate = booksFromService[i]['volumeInfo'].publishedDate;
      book.thumbnail = booksFromService[i]['volumeInfo'].imageLinks?.thumbnail;

      book.authors = booksFromService[i]['volumeInfo'].authors?.map<Author[]>((author: String) => {
        return new Author(author);
      });

      books[i] = book;
    }      

    return books;
  }


}
