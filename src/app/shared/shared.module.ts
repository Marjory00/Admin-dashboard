import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTab } from './router-tab/router-tab.directive';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    RouterTab,

   ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
    exports: [
      CommonModule,
      FlexLayoutModule,
      PageNotFoundComponent,
      RouterTab
  ]
})
export class SharedModule { }
