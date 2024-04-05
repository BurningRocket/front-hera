import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAloneComponent } from './card-alone.component';

describe('CardAloneComponent', () => {
  let component: CardAloneComponent;
  let fixture: ComponentFixture<CardAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
