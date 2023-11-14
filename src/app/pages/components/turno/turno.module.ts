import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TurnoRoutingModule } from './turno-routing.module';
import { TurnoComponent } from './turno.component';
import { TurnosModule } from 'src/app/components/turnos/turnos.module';


@NgModule({
  declarations: [
    TurnoComponent
  ],
  imports: [
    CommonModule,
    TurnoRoutingModule,
    TurnosModule
  ]
})
export class TurnoModule { }
