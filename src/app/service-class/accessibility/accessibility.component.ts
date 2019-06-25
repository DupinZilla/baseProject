import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html'
})
export class AccessibilityComponent {
  fontSize = 20;

  @Output() corSelecionada = new EventEmitter();

  @Output() fontChanged = new EventEmitter();

  selecionaCor(event) {
    const cor = event.target.value;

    this.corSelecionada.emit(cor);
  }

  onClick() {
    this.fontSize++;
    this.fontChanged.emit(this.fontSize + 'px');
  }
}
