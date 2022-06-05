import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterTabs } from './router-tab/router-tabs.directive';
import { RouterTab } from './router-tab/router-tab.directive';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    RouterTabs,
    RouterTab
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
      RouterTabs,
      RouterTab
  ]
})
export class SharedModule { }
