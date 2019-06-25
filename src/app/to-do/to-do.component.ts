import { Component, OnInit} from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDoList: Array<any> = [];
  item;
  id = 0;
  constructor() { }

  ngOnInit() {
  }

  OnSubmit() {
      const tarefa = {
        id: this.id,
        tarefa: this.item,
        isChecked: false
      };
    this.toDoList.push(tarefa);
    this.item = '';
  }

  deleteItem (indice) {
    this.toDoList.splice(indice, 1);
  }

  deleteMultipleItens() {
    const newList = [];
    this.toDoList.forEach((listItem) => {
    if (listItem.isChecked === false) {
      newList.push(listItem);
  }
    });
    this.toDoList = newList;
  }
}
