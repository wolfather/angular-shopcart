import { DetailComponent } from './../detail/detail.component';
import { HomeComponent } from './../home/home.component';
import { AppComponent } from './../app/app.component';
//import { ShopcartComponent } from './shopcart/shopcart.component';
//import { ProductComponent } from './product/product.component';

export class Components {
    static declarations = [
        AppComponent,
        HomeComponent,
        DetailComponent
        //ShopcartComponent,
        //ProductComponent,
    ];

    static components = {
        AppComponent,
        //ShopcartComponent,
        //ProductComponent,
    };
}