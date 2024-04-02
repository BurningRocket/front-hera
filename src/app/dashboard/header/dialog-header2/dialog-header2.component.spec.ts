import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHeader2Component } from './dialog-header2.component';

describe('DialogHeader2Component', () => {
  let component: DialogHeader2Component;
  let fixture: ComponentFixture<DialogHeader2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHeader2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
