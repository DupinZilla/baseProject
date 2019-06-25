import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-class',
  templateUrl: './service-class.component.html',
  styleUrls: ['./service-class.component.css']
})
export class ServiceClassComponent implements OnInit {

  constructor() { }

  minhaCor;

  fontSize;

  pegaCor (cor) {
    this.minhaCor = cor;
  }

  OnFontChangend (font) {
    this.fontSize = font;
  }

  ngOnInit() {
  }

}
