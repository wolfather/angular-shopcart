import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopcartComponent } from './shopcart.component';
import { ShopcartService } from './shopcart.service';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ShopcartComponent
    ],
    declarations: [
        ShopcartComponent
    ],
    providers: [
        ShopcartService
    ],
    entryComponents: [
        ShopcartComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShopcartModule {}