import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  toDoList: Array<any> = [];
  item;
  id = 0;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    const tarefa = {
      id: this.id,
      tarefa: this.item,
      isChecked: false
    };
    this.toDoList.push(tarefa);
    this.item = '';
  }

  deleteItem(indice) {
    this.toDoList.splice(indice, 1);
  }

  deleteMultipleItens() {
    const newList = [];
    this.toDoList.forEach(listItem => {
      if (listItem.isChecked === false) {
        newList.push(listItem);
      }
    });
    this.toDoList = newList;
  }
}
