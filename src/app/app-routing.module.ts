
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';

import { HomeComponent } from './admin/animations/home/home.component';

import { LoginComponent } from './login/login/login.component';

const routes: Routes = [


  { path: 'login', component: LoginComponent},

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
