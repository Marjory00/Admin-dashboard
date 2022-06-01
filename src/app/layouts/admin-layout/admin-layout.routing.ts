import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { MapsComponent } from 'src/app/maps/maps.component';
import { NotificationsComponent } from 'src/app/notifications/notifications.component';
import { IconsComponent } from 'src/app/icons/icons.component';
import { TableListComponent } from 'src/app/table-list/table-list.component';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';


export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'notifications', component: NotificationsComponent },
];
