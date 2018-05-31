import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductComponent } from './product.component';
import { MockProductsService } from '../assets/mock.product.service';

describe('ProductComponent', () => {
  let fixture: ComponentFixture<ProductComponent>,
      productComponent: ProductComponent,
      mockProductsService: MockProductsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ProductComponent],
      providers: [MockProductsService]
    }).compileComponents();

      fixture = TestBed.createComponent(ProductComponent);
      productComponent = fixture.debugElement.componentInstance;
      productComponent.ngAfterViewInit();

      mockProductsService = new MockProductsService();

      spyOn(productComponent, 'onClickGotoDetailHandler').and.callThrough();

      fixture.detectChanges();
  }));

  it('should create the ProductComponent', async(() => {
    expect(productComponent).toBeTruthy();
  }));

  it('should render "pacote de produto 01" in .product-info-title class', async(() => {
    let text: ComponentFixture<ProductComponent>;
    text = fixture.debugElement.children[0]
                  .nativeElement.querySelector('.product-info-title');

    expect(text).toBeDefined();
  }));

  it('onClickGotoDetailHandler should be defined', async(() => {
    expect(productComponent.onClickGotoDetailHandler).toBeDefined();
  }));

  // it('The onClickGotoDetailHandler method should be called with parameter', async(() => {
  //   const someProduct = mockProductsService.getProducts()[0];
  //   productComponent.props = mockProductsService.getProducts()[0];
  //   productComponent.onClickGotoDetailHandler(someProduct);

  //   expect(productComponent.onClickGotoDetailHandler).toHaveBeenCalledWith(someProduct);
  // }));
});
