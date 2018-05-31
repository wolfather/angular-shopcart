import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from '../product/product.module';

import { CategoryComponent } from './category.component';

@NgModule({
  imports: [
    CommonModule,
    ProductModule,
  ],
  declarations: [CategoryComponent],
  exports: [CategoryComponent],
  entryComponents: [CategoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoryModule {}
