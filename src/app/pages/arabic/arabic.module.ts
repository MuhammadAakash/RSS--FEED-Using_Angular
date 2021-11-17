import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArabicComponent } from "./arabic.component";
import { ArabicRoutes } from './arabic.router';



@NgModule({
  declarations: [ArabicComponent],
  exports:[ArabicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ArabicRoutes)
  ]
})
export class ArabicModule { }
