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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@angular/flex-layout';

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

import { NavbarComponent } from './components/navbar/navbar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';

import { MapsComponent } from './maps/maps.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationPageComponent } from './notification/containers/notification-page/notification-page.component';
import { DashboardPageComponent } from './dashboard/containers/dashboard-page/dashboard-page.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
      AppComponent,

      PageNotFoundComponent,
      NotificationPageComponent


      DashboardComponent,
       IconsComponent,

       MapsComponent,
       TableListComponent,
       UserProfileComponent,
       DashboardPageComponent,
       DateMenuComponent,
       SettingsMenuComponent,
       HeaderComponent,
       LayoutComponent,


   ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    CoreModule,
    FlexLayoutModule,
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
