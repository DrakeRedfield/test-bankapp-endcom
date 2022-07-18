import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNumberPipe } from './card-number/card-number.pipe';



@NgModule({
  declarations: [
    CardNumberPipe
  ],
  exports: [
    CardNumberPipe
  ]
})
export class PipesModule { }
