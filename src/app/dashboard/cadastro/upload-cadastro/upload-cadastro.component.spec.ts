import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCadastroComponent } from './upload-cadastro.component';

describe('UploadCadastroComponent', () => {
  let component: UploadCadastroComponent;
  let fixture: ComponentFixture<UploadCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
