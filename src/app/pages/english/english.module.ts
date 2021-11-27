import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishComponent } from './english.component';
import { RouterModule } from '@angular/router';
import { EnglishRoutes } from './english.router';
import {NgxPaginationModule} from 'ngx-pagination';
import {BreadcrumbModule} from 'angular-crumbs';



@NgModule({
  declarations: [EnglishComponent],
  exports:[EnglishComponent],
  imports: [
    NgxPaginationModule,
    BreadcrumbModule,
    CommonModule,
    RouterModule.forChild(EnglishRoutes)
  ]
})
export class EnglishModule { }
