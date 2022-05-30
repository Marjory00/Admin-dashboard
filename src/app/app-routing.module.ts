import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent }];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
