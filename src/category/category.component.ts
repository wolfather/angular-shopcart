import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MockCategoryService } from './../assets/mock.category.service';
import { MockProductsService } from './../assets/mock.product.service';

import { Icategory } from './category.interface';
import { Iproduct } from '../product/product.interface';


@Component({
  moduleId: module.id.toString(),
  selector: 'app-category-component',
  templateUrl: './category.template.html',
  styleUrls: ['./category.style.css']
})
export class CategoryComponent implements OnInit {
  pageTitle: Icategory = {};

  categoryProducts: Array<Iproduct> = [];

  constructor(
    private actRoute: ActivatedRoute,
    private _products: MockProductsService,
    private _categories: MockCategoryService
  ) {}

  onLoadingInformationHandler(): void {
    this.actRoute.params.subscribe(e => {
      console.log(e, this._categories.getCategoryById(e));
      this.pageTitle = this._categories.getCategoryById(e);

      this.categoryProducts = this._products.getProductsByCategory(e.categoryId);
    });
  }

  ngOnInit() {
    this.onLoadingInformationHandler();
  }
}
