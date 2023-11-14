import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DespachadosRoutingModule } from './despachados-routing.module';
import { DespachadosComponent } from './despachados.component';
import { TurnosModule } from 'src/app/components/turnos/turnos.module';


@NgModule({
  declarations: [
    DespachadosComponent
  ],
  imports: [
    CommonModule,
    DespachadosRoutingModule,
    TurnosModule
  ]
})
export class DespachadosModule { }
