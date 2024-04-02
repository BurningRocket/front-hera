import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataviewCartComponent } from './dataview-cart.component';

describe('DataviewCartComponent', () => {
  let component: DataviewCartComponent;
  let fixture: ComponentFixture<DataviewCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataviewCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataviewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
