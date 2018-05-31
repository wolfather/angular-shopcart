import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ProductModule } from '../product/product.module';
import { CategoryComponent } from './category.component';

import { MockCategoryService } from './../assets/mock.category.service';
import { MockProductsService } from './../assets/mock.product.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

describe('CategoryComponent', () => {
  let fixture: ComponentFixture<CategoryComponent>,
        categoryComponent: CategoryComponent,
        mockCategory: MockCategoryService,
        mockProductsService: MockProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductModule,
        RouterTestingModule
      ],
      declarations: [CategoryComponent],
      providers: [
        MockCategoryService,
        MockProductsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.of({
              categoryAlias: 'homecare',
              categoryId : '01',
              isActive : true
            })
          }
        }
      ]
    }).compileComponents();

      fixture = TestBed.createComponent(CategoryComponent);
      categoryComponent = fixture.debugElement.componentInstance;

      mockCategory = new MockCategoryService();
      mockProductsService = new MockProductsService();

      // categoryComponent.categoryProducts = mockProductsService.getProductsByCategory('01');

      // spyOn(categoryComponent, 'onLoadingInformationHandler').and.callThrough();

      fixture.detectChanges();
  }));

  it('should create the CategoryComponent', async(() => {
    expect(categoryComponent).toBeTruthy();
  }));

  // it('the onLoadingInformationHandler method should be called when ngOnInit were dispatched', async(() => {
    // categoryComponent.ngOnInit();
    // expect(categoryComponent.onLoadingInformationHandler).toHaveBeenCalledTimes(1);
  // }));


});
