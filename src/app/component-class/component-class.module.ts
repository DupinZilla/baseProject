import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentClassComponent } from './component-class.component';
import { AppCardComponent } from './card/app-card.component';
import { AppListaSonoComponent } from './lista-sono/app-lista-sono.component';

@NgModule({
  declarations: [
    ComponentClassComponent,
    AppCardComponent,
    AppListaSonoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentClassModule { }
