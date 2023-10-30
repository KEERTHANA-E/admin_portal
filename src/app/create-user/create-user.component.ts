import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
interface user{
  id?:number;
  name:string;
  role : string;
  age : number;
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  userData : FormGroup;
  constructor (private userService : UserService,private router : Router){
    this.userData = new FormGroup({
      name: new FormControl('',[Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),]),
      role: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required)
    });
  }
  createUser(){
    console.log(this.userData.value);
    if(this.userData.valid){
      this.userService.createUser(this.userData.value);
      alert("new user created");
      this.router.navigate(['/user'])
    }
  }
}
