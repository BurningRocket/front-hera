import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductsHome1Component } from './banner-products-home1.component';

describe('BannerProductsHome1Component', () => {
  let component: BannerProductsHome1Component;
  let fixture: ComponentFixture<BannerProductsHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProductsHome1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerProductsHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
