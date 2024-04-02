import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeader4Component } from './dialog-header4.component';

describe('DialogHeader4Component', () => {
  let component: DialogHeader4Component;
  let fixture: ComponentFixture<DialogHeader4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHeader4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHeader4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
