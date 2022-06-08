import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';

//Added

import { NgChartsModule } from 'ng2-charts';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    LineChartComponent,
    PolarChartComponent,
    RadarChartComponent,
    DonutChartComponent,
    HomeComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    NgChartsModule
  ],
  providers: [DataService]
})
export class ChartsModule { }
