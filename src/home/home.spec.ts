import { MockCategoryService } from './../assets/mock.category.service';
import { MockProductsService } from './../assets/mock.product.service';
import { CategorylistModule } from './../categorylist/categorylist.module';
import { ProductModule } from './../product/product.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>,
        homeComponent: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            CommonModule,
            ProductModule,
            CategorylistModule,
            RouterTestingModule
        ],
        declarations: [HomeComponent],
        providers: [
            MockProductsService,
            MockCategoryService
        ]
    }).compileComponents();

      fixture = TestBed.createComponent(HomeComponent);
      homeComponent = fixture.debugElement.componentInstance;

      fixture.detectChanges();
  }));

  it('should create the HomeComponent', async(() => {
    expect(homeComponent).toBeTruthy();
  }));

});
