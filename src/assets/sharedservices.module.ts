import { CommonModule } from '@angular/common';
import { MockProductsService } from './mock.product.service';
import { MockCategoryService } from './mock.category.service';
import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        MockCategoryService,
        MockProductsService
    ]
})
export class SharedServicesModule {
    static forRoot() {
        return {
            ngModule: SharedServicesModule,
            provider: [
                MockCategoryService,
                MockProductsService
            ],
        };
    }
}
