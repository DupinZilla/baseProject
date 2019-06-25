import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { ImageLoaderService } from './services/image-loader/image-loader.service';
import { TextComponent } from './text/text.component';
import { ServiceClassComponent } from './service-class/service-class.component';

@NgModule({
  declarations: [
    AccessibilityComponent,
    TextComponent,
    ServiceClassComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TextComponent,
    AccessibilityComponent,
  ],
  providers: [
    ImageLoaderService
  ]
})
export class ModuleTwoModule { }
