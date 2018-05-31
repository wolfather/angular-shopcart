import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorylistModule } from './../categorylist/categorylist.module';
import { ProductModule } from '../product/product.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
    CategorylistModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  entryComponents: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
