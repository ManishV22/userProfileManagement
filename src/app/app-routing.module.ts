import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AuthLoginComponent } from './modules/auth/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: AuthLoginComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register1', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'components', loadChildren: () => import('./modules/components/components.module').then(m => m.ComponentsModule) },
  { path: 'admin', loadChildren: () => import('./modules/components/admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
