import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmergenciaComponent } from './modal-emergencia.component';

describe('ModalEmergenciaComponent', () => {
  let component: ModalEmergenciaComponent;
  let fixture: ComponentFixture<ModalEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmergenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
