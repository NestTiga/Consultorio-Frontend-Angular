import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTurnosDespachadosComponent } from './mostrar-turnos-despachados.component';

describe('MostrarTurnosDespachadosComponent', () => {
  let component: MostrarTurnosDespachadosComponent;
  let fixture: ComponentFixture<MostrarTurnosDespachadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTurnosDespachadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTurnosDespachadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
