import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardComponent } from './card/app-card.component';
import { AppListaSonoComponent } from './lista-sono/app-lista-sono.component';
import { ComponentClassComponent } from './component-class/component-class.component';


@NgModule({
  declarations: [
    AppCardComponent,
    AppListaSonoComponent,
    ComponentClassComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AppCardComponent,
    AppListaSonoComponent,
    ComponentClassComponent,
  ],

})
export class ModuleOneModule { }
