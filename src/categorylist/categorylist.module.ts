import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorylistComponent } from './categorylist.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CategorylistComponent],
  exports: [CategorylistComponent],
  entryComponents: [CategorylistComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CategorylistModule {}
