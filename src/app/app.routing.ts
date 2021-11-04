import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './shared/helper/auth.guard';


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
      canActivate:[AuthGuard]
  }]},
  {
    path: 'login',
    component: LoginComponent
  }
]
