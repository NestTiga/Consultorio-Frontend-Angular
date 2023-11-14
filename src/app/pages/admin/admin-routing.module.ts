import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ControlRutasRolGuard } from 'src/app/Guards/control-rutas-rol.guard';

const routes: Routes = [
  {
    path: 'turnos',
    loadChildren: () =>
      import('../components/turno/turno.module').then(
        (m) => m.TurnoModule
      )
  },
  {
    path: 'consulta',
    loadChildren: () =>
      import('../components/consulta/consulta.module').then(
        (m) => m.ConsultaModule
      )
      
  },
  {
    path: 'despachados',
    loadChildren: () =>
      import('../components/despachados/despachados.module').then(
        (m) => m.DespachadosModule
      )
      
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
