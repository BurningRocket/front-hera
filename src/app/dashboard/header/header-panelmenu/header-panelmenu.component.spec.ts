import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPanelmenuComponent } from './header-panelmenu.component';

describe('HeaderPanelmenuComponent', () => {
  let component: HeaderPanelmenuComponent;
  let fixture: ComponentFixture<HeaderPanelmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPanelmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPanelmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
