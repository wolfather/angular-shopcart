import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MockCategoryService } from './../assets/mock.category.service';
import { MockProductsService } from './../assets/mock.product.service';

import { Icategory } from '../category/category.interface';
import { Iproduct } from '../product/product.interface';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-categorylist-component',
  templateUrl: './categorylist.template.html',
  styleUrls: ['./categorylist.style.css']
})
export class CategorylistComponent implements OnInit {
  mock: Array<Iproduct> = [];
  categories: Array<Icategory> = [];

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private _mock: MockProductsService,
    private _cat: MockCategoryService
  ) {}

  ngOnInit() {
    this.categories = this._cat.getCategories();
  }

  onClickGotoCategory(cat: Icategory): void {
    this.router.navigate(['category', cat.categoryId]);
  }
}
