import { DashboardComponent } from './../../dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { TableListComponent } from 'src/app/table-list/table-list.component';
import { IconsComponent } from 'src/app/icons/icons.component';
import { MapsComponent } from 'src/app/maps/maps.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,

  ],

  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule

  ]
})
export class AdminLayoutModule { }
