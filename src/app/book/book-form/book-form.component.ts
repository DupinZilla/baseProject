import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BooKService } from '../services/book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book;

  ngOnInit() {
    this.book = new Book();
  }
  constructor(public bookService: BooKService) { }

  public onSubmit(bookForm: NgForm) {
    this.bookService.addBook(bookForm.value);
    bookForm.reset();
  }

}
