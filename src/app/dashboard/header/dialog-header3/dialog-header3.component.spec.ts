import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeader3Component } from './dialog-header3.component';

describe('DialogHeader3Component', () => {
  let component: DialogHeader3Component;
  let fixture: ComponentFixture<DialogHeader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHeader3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHeader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
