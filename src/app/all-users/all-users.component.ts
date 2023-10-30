import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
interface user{
  id?:number;
  name:string;
  role : string;
  age : number;
}
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  currentUser : Array<user> | undefined;
  constructor(private activeRoute: ActivatedRoute,private userService: UserService){
    console.log(this.activeRoute);
      this.currentUser = userService.users;
  }
}
