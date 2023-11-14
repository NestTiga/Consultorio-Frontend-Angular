import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespachadosComponent } from './despachados.component';

const routes: Routes = [{ path: '', component: DespachadosComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DespachadosRoutingModule { }
