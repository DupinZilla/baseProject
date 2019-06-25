import { Component } from '@angular/core';

@Component({
  selector: 'app-service-class',
  templateUrl: './service-class.component.html',
  styleUrls: ['./service-class.component.css']
})
export class ServiceClassComponent {

  minhaCor;

  fontSize;

  pegaCor(cor) {
    this.minhaCor = cor;
  }

  onFontChanged(font) {
    this.fontSize = font;
  }
}
