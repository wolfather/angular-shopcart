import { MockProductsService } from './../assets/mock.product.service';
import { MockCategoryService } from './../assets/mock.category.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DetailComponent],
  exports: [DetailComponent],
  entryComponents: [DetailComponent],
  providers: [
    MockCategoryService,
    MockProductsService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailModule {}
