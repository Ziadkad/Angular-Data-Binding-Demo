import { Component } from '@angular/core';
import { IUsersList } from './IUsersList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  user : IUsersList ={
    name: '',
    job: ''
  };
  usersList:IUsersList[] = [{
    name : "u1",
    job: "Dev"
  },{
    name : "u2",
    job: "Manager"
  }
]
  receiveNewUsers(i:number) {
    this.usersList.splice(i,1);
  }
  receiveNewUser(user :IUsersList) {
    this.usersList.push(user);
  }
}