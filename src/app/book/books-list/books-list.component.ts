import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { BooKService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements AfterViewInit {

  public books: Book[] = [];

  constructor(public cdRef: ChangeDetectorRef, public booKService: BooKService) { }

  ngAfterViewInit() {
    this.books = this.booKService.getBooks();
    this.cdRef.detectChanges();
  }

}
