import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
interface user {
  id?: number;
  name: string;
  role: string;
  age: number;
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userData: FormGroup;
  currentData: user | undefined;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {

    let UId = this.activatedRoute.snapshot.params['id'];
    let UserIndex = this.userService.users.findIndex(
      (u) => u.id == UId);
    this.currentData = this.userService.users[UserIndex];


    this.userData = new FormGroup({
      name: new FormControl(this.currentData.name, [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),]),
      role: new FormControl(this.currentData.role, Validators.required),
      age: new FormControl(this.currentData.age, Validators.required)
    });
  }
  editUser() {
    console.log(this.userData.value);
    if (this.userData.valid) {
      console.log("valid");
      let UId = this.activatedRoute.snapshot.params['id'];
      this.activatedRoute.params.subscribe((params) => {
        let UserIndex = this.userService.users.findIndex(
          (u) => u.id == UId);
        this.userService.editUser(UserIndex, this.userData.value);
        
      });
    }
    else{
      alert("enter valid data");
    }
  }
}
