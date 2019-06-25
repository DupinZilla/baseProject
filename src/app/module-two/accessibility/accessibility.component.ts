import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'app-accessibility',
  templateUrl : './accessibility.component.html',

})

export class AccessibilityComponent {
  fontSize = 20;
  @Output() CorSelecionada = new EventEmitter();

  @Output() FontChangend = new EventEmitter();

  selecionaCor(event) {
    const cor = event.target.value;
    this.CorSelecionada.emit(cor);
  }

  onClick() {
    this.fontSize = this.fontSize + 1;
    this.FontChangend.emit(this.fontSize + 'px');
  }

  onClickMenos() {
    this.fontSize = this.fontSize - 1;
    this.FontChangend.emit(this.fontSize + 'px');
  }

}
