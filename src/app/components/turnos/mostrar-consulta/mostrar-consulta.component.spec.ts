import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarConsultaComponent } from './mostrar-consulta.component';

describe('MostrarConsultaComponent', () => {
  let component: MostrarConsultaComponent;
  let fixture: ComponentFixture<MostrarConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
