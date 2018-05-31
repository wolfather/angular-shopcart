import { Injectable } from '@angular/core';

import { Iproduct } from '../product/product.interface';
import { Icategory } from './../category/category.interface';

@Injectable()
export class MockProductsService {
  private mock: Array<Iproduct> = [
    {
      'id': 'prod-01',
      'categoryAlias': 'homecare',
      'categoryId': '01',
      'name': 'pacote de produto 01',
      'fullPrice': '120,01',
      'shortDescription': 'curta descrição de produto',
      'longDescription': 'curta descrição de produto',
      'hasProducts': true,
      'imageSrc': 'image01.jpg',
      'len': 19
    },
    {
      'id': 'prod-02',
      'categoryAlias': 'homecare',
      'categoryId': '01',
      'name': 'mega pacote de produto 02',
      'fullPrice': '220,81',
      'shortDescription': 'curta descrição de produto',
      'longDescription': 'curta descrição de produto',
      'hasProducts': true,
      'imageSrc': 'image02.jpg',
      'len': 12
    },
    {
      'id': 'prod-03',
      'categoryAlias': 'healthcare',
      'categoryId': '02',
      'name': 'hyper mega bundle pack 03',
      'fullPrice': '420,01',
      'shortDescription': 'curta descrição de produto 03',
      'longDescription': 'curta descrição de produto 03',
      'hasProducts': true,
      'imageSrc': 'image03.jpg',
      'len': 21
    }
  ];

  getProducts(): Array<Iproduct> {
    return this.mock;
  }

  getProductById(prod: Iproduct): Iproduct {
    const product = this.mock.filter((p: Iproduct) => {
      return p.id === prod.id;
    });
    return product[0];
  }

  getProductsByCategory(id: string): Array<Iproduct> {
    return this.mock.filter((prod: Iproduct) => {
      return prod.categoryId === id;
    });
  }

}
