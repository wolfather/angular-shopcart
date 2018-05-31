import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ShopcartComponent } from './shopcart.component';
import { ShopcartService } from './shopcart.service';

describe('shopcart', () => {
  let fixture: ComponentFixture<ShopcartComponent>,
    shopcart: ShopcartComponent,
    de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShopcartComponent
      ],
      providers:[
        ShopcartService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartComponent);
    shopcart = fixture.componentInstance;

    fixture.detectChanges();
  })

  it('should create the ShopcartComponent', async(() => {
    expect(shopcart).toBeTruthy();
  }));

});
