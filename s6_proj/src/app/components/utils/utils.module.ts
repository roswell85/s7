import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideComponentDirective } from './hide-component.directive';
import { CurrancyPipe } from './currancy.pipe';



@NgModule({
  declarations: [
    HideComponentDirective,
    CurrancyPipe
  ],
  exports: [
    HideComponentDirective,
    CurrancyPipe
  ],
  imports: [
    CommonModule
  ]
})
export class UtilsModule { }
