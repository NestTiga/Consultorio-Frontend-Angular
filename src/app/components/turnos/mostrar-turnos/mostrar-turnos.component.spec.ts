import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTurnosComponent } from './mostrar-turnos.component';

describe('MostrarTurnosComponent', () => {
  let component: MostrarTurnosComponent;
  let fixture: ComponentFixture<MostrarTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarTurnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
