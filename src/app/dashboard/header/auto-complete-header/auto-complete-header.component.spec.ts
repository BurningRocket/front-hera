import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteHeaderComponent } from './auto-complete-header.component';

describe('AutoCompleteHeaderComponent', () => {
  let component: AutoCompleteHeaderComponent;
  let fixture: ComponentFixture<AutoCompleteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCompleteHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoCompleteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
