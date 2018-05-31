import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { MockProductsService } from './../assets/mock.product.service';
import { ProductModule } from '../product/product.module';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('DetailComponent', () => {
  let fixture: ComponentFixture<DetailComponent>,
        detailComponent: DetailComponent,
        mockProductsService: MockProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ProductModule
      ],
      declarations: [DetailComponent],
      providers: [
        MockProductsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({id : 'prod-01'})
          }
        }
      ]
    }).compileComponents();

      fixture = TestBed.createComponent(DetailComponent);
      detailComponent = fixture.debugElement.componentInstance;

      mockProductsService = new MockProductsService();

      // spyOn(categoryComponent, 'onLoadingInformationHandler').and.callThrough();

      fixture.detectChanges();
  }));

  it('should create the DetailComponent', async(() => {
    expect(detailComponent).toBeTruthy();
  }));

  // it('onLoadingInfo method should should be called on ngOnInit', async(() => {
  //   // const detailProductParam = {id : 'prod-01'};
  //   // detailComponent.detailProduct = mockProduct.getProductById(detailProductParam);

  //   detailComponent.ngOnInit();
  //   expect(detailComponent.onLoadingInfo).toHaveBeenCalled();
  // }));

});
