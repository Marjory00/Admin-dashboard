import { NotificationModule } from './notification/notification.module';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

import 'hammerjs';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { SharedModule } from './shared/shared.module';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgChartsModule } from 'ng2-charts';
import { baseURL } from './shared/baseurl';


import { IconsComponent } from './icons/icons.component';

import { MapsComponent } from './maps/maps.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationPageComponent } from './notification/containers/notification-page/notification-page.component';
import { DashboardPageComponent } from './dashboard/containers/dashboard-page/dashboard-page.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
      AppComponent,
      PageNotFoundComponent,
      NotificationPageComponent,
      SidebarComponent,
      NavbarComponent

   ],
  imports: [
    NgModule,
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    MatCardModule,

    SharedModule,
    MatInputModule,
    FormsModule,

    RouterModule.forRoot([

    ]),

    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
  {provide: 'BaseURL', useValue: baseURL}
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
