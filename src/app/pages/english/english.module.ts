import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishComponent } from './english.component';
import { RouterModule } from '@angular/router';
import { EnglishRoutes } from './english.router';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [EnglishComponent],
  exports:[EnglishComponent],
  imports: [
    NgxPaginationModule,
    CommonModule,
    RouterModule.forChild(EnglishRoutes)
  ]
})
export class EnglishModule { }
