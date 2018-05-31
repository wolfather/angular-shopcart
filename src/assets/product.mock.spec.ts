import { TestBed, async } from '@angular/core/testing';

import { MockProductsService } from './mock.product.service';
import { Iproduct } from '../product/product.interface';

describe('MockProducts Service', () => {
  let mockProducts: MockProductsService;

  beforeEach(async(() => {
    mockProducts = new MockProductsService();

    TestBed.configureTestingModule({
      providers: [MockProductsService]
    });

  }));

  it('mockProducts should be an instance of MockProducts class', async(() => {
    expect(mockProducts instanceof MockProductsService).toBeTruthy();
  }));
  it('should create the mockProducts', async(() => {
    expect(mockProducts).toBeTruthy();
  }));
  it('getProducts method should return Iproduct array of objects', async(() => {
    let products: Array<Iproduct>;

    products = mockProducts.getProducts();
    expect(products.length).toBeGreaterThan(1);

    // expect(products[0].name).toEqual('pacote de produto 01');
  }));
});
