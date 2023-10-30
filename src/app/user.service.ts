import { Injectable } from '@angular/core';
interface user{
  id?:number;
  name:string;
  role : string;
  age : number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<user> = [
    {
      id:1,
      name:"riya",
      role : "software engineer",
      age : 24
    },
    {
      id:2,
      name:"ramesh",
      role : "Java developer",
      age : 44
    },
    {
      id:3,
      name:"ramya",
      role : "backend developer",
      age : 35
    },
    {
      id:4,
      name:"rakesh",
      role : "intern",
      age : 29
    }
  ]
  constructor() { }
  createUser(u: user) {
    u.id = this.users.length + 1;
    this.users.push(u);
  }
  editUser(UserIndex: number,u:user){
    if(this.users[UserIndex].name===u.name && this.users[UserIndex].role===u.role && this.users[UserIndex].age===u.age){
      alert("change any field to update the data");
      return false;
    }
    this.users[UserIndex].name=u.name;
    this.users[UserIndex].role=u.role;
    this.users[UserIndex].age=u.age;
    alert("User updated successfully");
    return true;
  }
}
