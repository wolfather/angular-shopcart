import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MockProductsService } from './../assets/mock.product.service';

import { Iproduct } from '../product/product.interface';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-detail-component',
  templateUrl: './detail.template.html',
  styleUrls: ['./detail.style.css'],
  // providers: [ActivatedRoute]
})
export class DetailComponent implements OnInit {
  detailProduct: Iproduct;

  constructor(
    private actRoute: ActivatedRoute,
    private product: MockProductsService
  ) {}

  checkDetailsContent(): boolean {
    return !!this.detailProduct;
  }
  private onBackPageHandler(): void {
    window.history.back();
  }

  onLoadingInfoHandler(): void {
    this.actRoute.params.subscribe(e => {
      console.log(e);
      this.detailProduct = this.product.getProductById(e);
    });
  }

  ngOnInit() {
    this.onLoadingInfoHandler();
  }
}
