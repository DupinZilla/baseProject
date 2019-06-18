import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppBaseComponent } from './base/base.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComponentClassModule } from './component-class/component-class.module';
import { ServiceClassModule } from './service-class/service-class.module';
import { ToDosComponent } from './to-dos/to-dos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppBaseComponent,
    NotFoundComponent,
    ToDosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentClassModule,
    ServiceClassModule,
    FormsModule
  ],
  bootstrap: [AppBaseComponent]
})
export class AppModule { }
