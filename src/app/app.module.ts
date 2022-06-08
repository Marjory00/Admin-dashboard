import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ChartsModule } from './admin/charts/charts.module';

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      SideNavComponent,

   ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    CoreModule,

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
  //{provide: 'BaseURL', useValue: baseURL}
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
