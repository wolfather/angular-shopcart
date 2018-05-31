import { Component, OnInit } from '@angular/core';

import { MockProductsService } from '../assets/mock.product.service';
import { Iproduct } from '../product/product.interface';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-home-component',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.css']
})
export class HomeComponent implements OnInit {
  products: Array<Iproduct> = [];

  constructor(private _mock: MockProductsService) {}

  ngOnInit() {
    this.products = this._mock.getProducts();
    // console.log(this._mock);
  }

  onBuyProductEmitter(product: Iproduct): void {
    console.log(product);
  }
}
