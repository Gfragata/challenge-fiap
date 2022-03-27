import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaAtendimentoComponent } from './senha-atendimento.component';

describe('SenhaAtendimentoComponent', () => {
  let component: SenhaAtendimentoComponent;
  let fixture: ComponentFixture<SenhaAtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaAtendimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
