import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksListComponent } from './books-list/books-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookRoutingModule } from './book-routing.module';
import { BooKService } from './services/book.service';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BooksListComponent,
    BookFormComponent,
    BookDetailComponent,
    BookFormReactiveComponent
  ],
  providers: [
    BooKService
  ]
})
export class BookModule { }
