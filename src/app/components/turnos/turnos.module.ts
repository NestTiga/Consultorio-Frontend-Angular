import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTurnosComponent } from './crear-turnos/crear-turnos.component';
import { MostrarTurnosComponent } from './mostrar-turnos/mostrar-turnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotonesModule } from '../botones/botones.module';
import { MostrarConsultaComponent } from './mostrar-consulta/mostrar-consulta.component';
import { MostrarTurnosDespachadosComponent } from './mostrar-turnos-despachados/mostrar-turnos-despachados.component';



@NgModule({
  declarations: [
    CrearTurnosComponent,
    MostrarTurnosComponent,
    MostrarConsultaComponent,
    MostrarTurnosDespachadosComponent
  ],
  imports: [
    CommonModule, BotonesModule, ReactiveFormsModule, FormsModule
  ],
  exports:[
    CrearTurnosComponent,
    MostrarTurnosComponent,
    MostrarConsultaComponent,
    MostrarTurnosDespachadosComponent
  ]
})
export class TurnosModule { }
