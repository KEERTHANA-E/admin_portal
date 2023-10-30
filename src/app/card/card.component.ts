import { Component, Input ,AfterViewInit} from '@angular/core';
import * as feature from 'feather-icons'
interface cardDetails{
  title: string;
  count: string;
  percent : number;
  flag:number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  @Input() card : cardDetails | undefined;
  ngAfterViewInit(): void {
    console.log("In card ")
    feature.replace();
  }
}

