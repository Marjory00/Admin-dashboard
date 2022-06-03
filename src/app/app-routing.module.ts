import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [


    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '', component: DashboardComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: AdminLayoutComponent, pathMatch: 'full' },
    { path: '', component: FooterComponent, pathMatch: 'full' },
    { path: '', component: NavbarComponent, pathMatch: 'full' },
    { path: '', component: SidebarComponent, pathMatch: 'full' },
    { path: '', component: MapsComponent, pathMatch: 'full' },
    { path: '', component: NotificationsComponent, pathMatch: 'full' },
    { path: '', component: TableListComponent, pathMatch: 'full' },
    { path: '', component: UserProfileComponent, pathMatch: 'full' },

];


@NgModule({
imports: [
  CommonModule,
  BrowserModule,
  RouterModule.forRoot(routes,{
     useHash: true
  })
],
exports: [
],
})
export class AppRoutingModule { }
