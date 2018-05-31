import { CategoryComponent } from './../category/category.component';
import { DetailComponent } from './../detail/detail.component';
import { HomeComponent } from './../home/home.component';

import { CategorylistModule } from './../categorylist/categorylist.module';
import { CategoryModule } from './../category/category.module';
import { DetailModule } from './../detail/detail.module';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { SharedServicesModule } from '../assets/sharedservices.module';
import { HomeModule } from './../home/home.module';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from '../route/route.index';

import {APP_BASE_HREF} from '@angular/common';

import { RouterTestingModule } from '@angular/router/testing';
import { MockProductsService } from './../assets/mock.product.service';
import { ProductComponent } from '../product/product.component';
import { ProductModule } from '../product/product.module';
import { ShopcartModule } from '../shopcart/shopcart.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  // let mockProducts: MockProducts;

  const ROUTES: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {path: '', component: HomeComponent},
    {path: 'detail/:id', component: DetailComponent},
    {
      path: 'category/:categoryId',
      component: CategoryComponent
    },
    {path: '**', redirectTo: ''}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RoutingModule,
        RouterModule.forRoot(ROUTES),
        HomeModule,
        ProductModule,
        DetailModule,
        CategorylistModule,
        CategoryModule,
        ShopcartModule,
        SharedServicesModule.forRoot(),
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue : '/'
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  }));
  it('should create the AppComponent', async(() => {
    expect(appComponent).toBeTruthy();
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

