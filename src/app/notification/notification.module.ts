import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { NotificationPageComponent } from './containers/notification-page/notification-page.component';


@NgModule({
  declarations: [
    NotificationPageComponent
  ],
  imports: [
    CommonModule,


  ]
})
export class NotificationModule { }
