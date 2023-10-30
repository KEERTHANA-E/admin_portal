import { AfterViewInit,Component } from '@angular/core';
import * as feather from 'feather-icons';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'admin_portal';
  cards=[
    {
      title : "Sales",
      count : "2.382",
      percent : 3.65,
      flag:0
    },
    {
      title : "Visitors",
      count: "14.212",
      percent : 6.65,
      flag:1
    },
    {
      title : "Earnings",
      count : "$21.300",
      percent : 5.25,
      flag:1
    },
    {
      title : "Orders",
      count:"64",
      percent : 2.25,
      flag:0
    }
  ];
  isLogged = true;
  ngAfterViewInit() {
    feather.replace();
  }
}
