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
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
  currentUser: user | undefined;
  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
    console.log(this.activeRoute);
    let UId = this.activeRoute.snapshot.params['id'];
    this.activeRoute.params.subscribe((params) => {
      let UserIndex = this.userService.users.findIndex(
        (u) => u.id == UId);
        this.currentUser = this.userService.users[UserIndex];
    });
  }
}
