import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

//Added

import { NgChartsModule } from 'ng2-charts';
import { DataService } from './data.service';



@NgModule({
  declarations: [
    LineChartComponent,
    PolarChartComponent,
    RadarChartComponent,
    DonutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
