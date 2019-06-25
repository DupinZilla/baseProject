import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { FormControl, FormGroup } from '@angular/forms';
import { BooKService } from '../services/book.service';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    releaseDate: new FormControl(''),
    value: new FormControl('')
  })

  constructor(public booService: BooKService) { }

  ngOnInit() {  }

  public onSubmit(bookForm: any) {
    this.booService.addBook(bookForm.value);
    bookForm.reset();
  }
}
