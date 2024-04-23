import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUsersList } from '../IUsersList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
    @Input() usersList: IUsersList[] = [];
    @Output() newUpdatedUsers = new EventEmitter<number>();
      removeUser(user : IUsersList){
        let i = this.usersList.indexOf(user);
        this.newUpdatedUsers.emit(i);
      }
}
