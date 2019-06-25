import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ServiceClassComponent } from './service-class.component';
import { ImageLoaderService } from './services/image-loader/image-loader.service';

import { TextComponent } from './text/text.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

@NgModule({
  declarations: [
    ServiceClassComponent,
    TextComponent,
    AccessibilityComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ImageLoaderService
  ]
})
export class ServiceClassModule { }
