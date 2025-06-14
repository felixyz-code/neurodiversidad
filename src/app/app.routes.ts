import { Routes } from '@angular/router';
import { LoginPage } from './login/login.component';
import { DashboardPage } from './dashboard/dashboard.component';
import { CitasPage } from './citas/citas.component';
import { UsuariosPage } from './usuarios/usuarios.component';
import { FinanzasPage } from './finanzas/finanzas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginPage
      },
      {
        path: 'dashboard',
        component: DashboardPage
      },
      {
        path: 'citas',
        component: CitasPage
      }
      ,
      {
        path: 'usuarios',
        component: UsuariosPage
      } ,
      {
        path: 'finanzas',
        component: FinanzasPage
      }
];

