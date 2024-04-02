import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientesCadastradosComponent } from './table-clientes-cadastrados.component';

describe('TableClientesCadastradosComponent', () => {
  let component: TableClientesCadastradosComponent;
  let fixture: ComponentFixture<TableClientesCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableClientesCadastradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableClientesCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
