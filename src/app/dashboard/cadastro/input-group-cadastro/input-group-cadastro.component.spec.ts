import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupCadastroComponent } from './input-group-cadastro.component';

describe('InputGroupCadastroComponent', () => {
  let component: InputGroupCadastroComponent;
  let fixture: ComponentFixture<InputGroupCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputGroupCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputGroupCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
