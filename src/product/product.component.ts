import {
  Component,
  AfterViewInit,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Iproduct } from './product.interface';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-product-component',
  templateUrl: './product.template.html'
})
export class ProductComponent implements AfterViewInit {
  // @Output() buyProduct: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  @Input() props?: Iproduct = {};

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngAfterViewInit() {}

  onClickGotoDetailHandler(product: Iproduct): void {
    // this.buyProduct.emit(product);

    this.router.navigate(['detail', product.id]);
  }
}
