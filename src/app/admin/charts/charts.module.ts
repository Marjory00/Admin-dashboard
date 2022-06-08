import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HomeComponent } from './home/home.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    BarChartComponent,
    HomeComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
