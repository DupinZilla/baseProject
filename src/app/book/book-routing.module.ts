import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormReactiveComponent } from './book-form-reactive/book-form-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent,
    children: [
      { path: 'new', component: BookFormComponent },
      { path: 'new-reactive', component: BookFormReactiveComponent },
      { path: ':id/detail', component: BookDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
