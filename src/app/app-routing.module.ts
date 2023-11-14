import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layouts } from './layout/layout';
import { AdminModule } from './pages/admin/admin.module';
import { LoginModule } from './pages/login/login.module';
import { VerificarTokenGuard } from './Guards/verificar-token.guard';

const routes: Routes = [
  {
    path: '',
    data: { layout: Layouts.Simple },
    children: [
      { path: '', loadChildren: () => LoginModule },
      // { path: 'noautorizado', loadChildren: () => NoAutorizadoModule },
      // { path: 'denegado', loadChildren: () => DeniedModule },
    ],
  },
  {
    path: 'sistema',
    data: { layout: Layouts.Full },
    canActivate:[VerificarTokenGuard],
    children: [{ path: '', loadChildren: () => AdminModule }],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
