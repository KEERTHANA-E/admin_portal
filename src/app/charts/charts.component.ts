import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    datasets: [
      {
        data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327],
        fill: true,
        tension: 0.5,
        borderColor: '#3B7DDD',
        backgroundColor: '#f5fcff',
        pointBorderColor: '#3B7DDD',
        pointBackgroundColor: '#D3E2F7'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    plugins : {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false 
        }
      },
      y: {
        display: true,
        grid: {
          display: false 
        },
        ticks : {
          stepSize: 1000
        }
      }
    }
  };
  public lineChartLegend = true;

  constructor() {
  }

  ngOnInit() {
  }
}
