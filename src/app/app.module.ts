import { ShopcartModule } from './../shopcart/shopcart.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductModule } from '../product/product.module';
import { RoutingModule } from '../route/route.index';
import { HomeModule } from '../home/home.module';
import { DetailModule } from '../detail/detail.module';
import { CategoryModule } from './../category/category.module';
import { CategorylistModule } from './../categorylist/categorylist.module';

import { SharedServicesModule } from '../assets/sharedservices.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HomeModule,
    DetailModule,
    ProductModule,
    CategoryModule,
    CategorylistModule,
    ShopcartModule,
    SharedServicesModule.forRoot()
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
