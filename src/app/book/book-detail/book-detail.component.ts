import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BooKService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  constructor(public bookService: BooKService, public route: ActivatedRoute) { }

  ngOnInit() {
    try {
      this.book = this.bookService.
        getBookById(parseInt(this.route.snapshot.paramMap.get('id')));

      if(!this.book)
        throw Error('Não foi encontrado o livro desejado');
    } catch (err) {
      alert("NÃO TEM ESSE LIVRO")
      // ADD TRATATIVA DE ERROO
    }
  }

}
