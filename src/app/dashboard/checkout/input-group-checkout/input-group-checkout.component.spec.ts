import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupCheckoutComponent } from './input-group-checkout.component';

describe('InputGroupCheckoutComponent', () => {
  let component: InputGroupCheckoutComponent;
  let fixture: ComponentFixture<InputGroupCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupCheckoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputGroupCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
