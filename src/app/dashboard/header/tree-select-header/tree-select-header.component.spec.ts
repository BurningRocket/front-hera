import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSelectHeaderComponent } from './tree-select-header.component';

describe('TreeSelectHeaderComponent', () => {
  let component: TreeSelectHeaderComponent;
  let fixture: ComponentFixture<TreeSelectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeSelectHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreeSelectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
