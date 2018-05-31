import { Injectable } from '@angular/core';

import { Icategory } from './../category/category.interface';

@Injectable()
export class MockCategoryService {
    private categories: Array<Icategory> = [
        {
            categoryAlias: 'homecare',
            categoryId: '01',
            isActive: true,
        },
        {
            categoryAlias: 'healthcare',
            categoryId: '02',
            isActive: true
        },
        {
            categoryAlias: 'foodcare',
            categoryId: '03',
            isActive: false
        }
    ];

    getCategories(): Array<Icategory> {
        return this.categories.filter((cat: Icategory) => {
            return cat.isActive === true;
        });
    }
    getCategoryById(param: Icategory): Icategory {
        const category = this.categories.filter((cat: Icategory) => {
            return cat.categoryId === param.categoryId;
        });
        return category[0];
    }
}
