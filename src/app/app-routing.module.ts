
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './admin/animations/home/home.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'admindashboard', component: AdminDashboardComponent},
  { path: 'sidenav', component: SideNavComponent},
  { path: 'topnav', component: TopNavComponent},
  { path: 'login', component: LoginComponent},
  { path: 'topnav', component: TopNavComponent},
  { path: 'footer', component: HomeComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
   path: '',
  loadChildren: () =>
 import ('./admin/admin.module').then( (m) => m.AdminModule ),
canActivate: [AuthGuard],
 },
 {
  path: 'login',
  loadChildren: () =>
   import ('./login/login.module').then((m) => m.LoginModule),
 },
  {
   path: '**',
  component: PageNotFoundComponent,
  },

];


@NgModule({
imports: [
  CommonModule,
  BrowserModule,
  RouterModule.forRoot(routes)],

exports: [RouterModule
],
})
export class AppRoutingModule { }
