import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => 
      import ('./pages/english/english.module').then((m)=>m.EnglishModule),
  },
  {
    path: 'arabic',
    loadChildren: () => 
      import ('./pages/arabic/arabic.module').then((m)=>m.ArabicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
