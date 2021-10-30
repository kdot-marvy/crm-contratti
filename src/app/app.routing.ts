import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }]},
  {
    path: 'login',
    component: LoginComponent
  }
]
