import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditModalComponent } from './add-edit-modal/add-edit-modal.component';
import { RouterModule } from '@angular/router';
import { TurnosModule } from '../components/turnos/turnos.module';


@NgModule({
  declarations: [AddEditModalComponent],
  imports: [CommonModule, RouterModule.forChild([]), TurnosModule],
  exports: [AddEditModalComponent],
})
export class ModalModule {}
