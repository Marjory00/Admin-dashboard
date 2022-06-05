
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
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
