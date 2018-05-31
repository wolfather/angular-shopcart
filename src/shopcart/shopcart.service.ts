import { Injectable } from "@angular/core";

import { Iproduct } from './../product/product.interface';

@Injectable()
export class ShopcartService {

    onDecrementProductHandler(product: Iproduct, products: Array<Iproduct>) {
        products.map((item: Iproduct, index: Number) => {
            if(item.id === product.id && item.len > 1) {
                item.total -= 1;

                item.fullPrice = (parseFloat(item.fullPrice) * item.total).toFixed(2).toString();
            }
        });
    }
    
    onIncrementProductHandler(product: Iproduct, products: Array<Iproduct>) {
        products.map((item: Iproduct, index: Number) => {
            if(item.id === product.id) {
                item.total += 1;

                item.fullPrice = (parseFloat(item.fullPrice) * item.total).toFixed(2).toString();
            }
        });
    }
}