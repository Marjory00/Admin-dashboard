import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  private barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  private barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  private barChartType: string = 'bar';
  private barChartLegend: boolean = true;
  private barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];

  // added

  type = 'bar-chart';
  data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales for last 5 months",
        fill: 'true',
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d"],
        data: [2478,5267,734,784,433]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      { display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [
      {
                display: true,
                gridLines: {
                    display:false
                }
            }]
}
}
      // Above Added

  constructor() { }


  ngOnInit() {}


    // Events

  chartClicked(e: any): void {
    console.log(e.active);
    console.log(e.event);
  }

  chartHovered(e: any): void {
    console.log(e);
  }
}

