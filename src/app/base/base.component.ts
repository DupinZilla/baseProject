import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class AppBaseComponent {
  title = 'Academia Angular';

  minhaCor;

  fontSize;

  pegaCor(cor) {
    this.minhaCor = cor;
  }

  onFontChanged(font) {
    this.fontSize = font;
  }

  plus( a: any, b: any ){
    return a + b;
  }

  isEvenOrOdd(num){
    if (num % 2){
      return 'odd';
    } else {
      return 'even';
    }
  }


}
