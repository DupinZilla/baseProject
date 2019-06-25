import { Component } from "@angular/core";

@Component({
  selector: 'app-lista-sono',
  templateUrl: './app-lista-sono.component.html',
  styleUrls: ['./app-lista-sono.component.css']
})
export class AppListaSonoComponent {
  people: any[] = [
    {
      name: 'Amanda',
      age: 17,
      level: 'G'
    },
    {
      name: 'Simba',
      age: 5,
      level: 'D'
    },
    {
      name: 'Carol',
      age: 15,
      level: 'P'
    },
    {
      name: 'João',
      age: 17,
      level: 'G'
    },
    {
      name: 'Alzira',
      age: 40,
      level: 'M'
    },
    {
      name: 'Vanderley',
      age: 47,
      level: 'M'
    }
  ];
}
