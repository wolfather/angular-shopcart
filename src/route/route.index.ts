import { CategoryComponent } from './../category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {path: '', component: HomeComponent},

  {path: 'detail/:id', component: DetailComponent},
  {
    path: 'category/:categoryId',
    component: CategoryComponent
    // loadChildren: '../detail/detail.module#DetailModule?sync=true'
  },
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      // enableTracing: true,
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
