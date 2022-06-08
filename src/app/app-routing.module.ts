import { DashboardPageComponent } from './dashboard/containers/dashboard-page/dashboard-page.component';
import { TablesModule } from './tables/tables/tables.module';

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';


import { LoginComponent } from './login/login/login.component';

const routes: Routes = [


  { path: 'dashboard',
  pathMatch: 'full',
  canActivate: [AuthGuard],
  component: DashboardPageComponent
  },

  {
  path: 'tables',
  pathMatch: 'full',
  canActivate: [AuthGuard],
  loadChildren: () => import('./tables/tables/tables.module').then(m => m.TablesModule)
  },

  {
    path: 'notification',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tables/tables/tables.module').then(m => m.TablesModule)
    },
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
