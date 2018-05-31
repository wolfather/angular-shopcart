import {
    Component,
    AfterViewInit,
    Input,
    EventEmitter,
} from "@angular/core";

import { Iproduct } from '../product/product.interface';
import { ShopcartService } from "./shopcart.service";

@Component({
    moduleId: module.id.toString(),
    selector: 'shopcart-component',
    templateUrl: './shopcart.template.html',
    styleUrls: ['./shopcart.style.css'],
    providers:[
        ShopcartService
    ]
})
export class ShopcartComponent implements AfterViewInit {
    @Input() shopcartitems: Array<Iproduct> = [];

    constructor(private scService: ShopcartService) {}

    ngAfterViewInit() {}

    private hasProductsInShopcart(): Boolean {
        return !!this.shopcartitems.length;
    }

    private onDecrementHandler(product: Iproduct): void {
        this.scService.onDecrementProductHandler(product, this.shopcartitems);
    }
    
    private onIncrementHandler(product: Iproduct): void {
        this.scService.onIncrementProductHandler(product, this.shopcartitems);
    }
}
