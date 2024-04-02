import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselResponsiveComponent } from './carousel-responsive.component';

describe('CarouselResponsiveComponent', () => {
  let component: CarouselResponsiveComponent;
  let fixture: ComponentFixture<CarouselResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarouselResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
