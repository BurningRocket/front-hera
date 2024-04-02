import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCadastroComponent } from './avatar-cadastro.component';

describe('AvatarCadastroComponent', () => {
  let component: AvatarCadastroComponent;
  let fixture: ComponentFixture<AvatarCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
