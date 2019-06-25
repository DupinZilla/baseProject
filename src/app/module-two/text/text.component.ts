import { Component, Input, OnInit } from '@angular/core';
import { checkNoChanges } from '@angular/core/src/render3/instructions';
import { ImageLoaderService } from '../services/image-loader/image-loader.service';


@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent  implements OnInit {
  @Input() title;

  @Input() cor = '#ccc';

  @Input() fontSize;

  image;

  constructor (
   public servico: ImageLoaderService
  ) {}

  ngOnInit() {
    this.servico.getImage().subscribe(
      (coisas) => {
        this.image = (coisas[0].url);
    }
    );
  }
}
