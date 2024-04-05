import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasInicialComponent } from './categorias-inicial.component';

describe('CategoriasInicialComponent', () => {
  let component: CategoriasInicialComponent;
  let fixture: ComponentFixture<CategoriasInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
