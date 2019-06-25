import { Injectable } from '@angular/core';
import { Book } from './models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    {
      id: 1,
      title: 'Harry Potter e a Pedra Filosofal',
      author: 'J.K Rowling',
      publiser: 'Editora Rocco',
      releaseDate:  new Date('1997-06-26'),
      value: 22.30
    }
  ];

  public getBookById(id: number) {
// tslint:disable-next-line: triple-equals
    return this.books.find((b) => b.id == id);
  }

  public getBooks() {
    return this.books;
  }

  public addBook(book: Book) {
    book.id = this.books.length > 0 ? (this.books[this.books.length - 1].id + 1) : 1;
    this.books.push(book);
  }
}
