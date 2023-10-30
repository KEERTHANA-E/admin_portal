import { Component,OnInit } from '@angular/core';
import * as feature from 'feather-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  ngOnInit(): void {
    feature.replace()
  }
}
