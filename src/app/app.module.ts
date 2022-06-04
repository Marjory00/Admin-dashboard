import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import 'hammerjs';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RouterTabComponent } from './shared/router-tab/router-tab.component';


@NgModule({
  declarations: [
    AppComponent,

      LayoutComponent,
       PageNotFoundComponent,
       RouterTabComponent
   ],
  imports: [
    NgModule,
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [
  //{provide: 'BaseURL', useValue: baseURL}
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
