import { Component, EventEmitter, Output } from '@angular/core';
import { IUsersList } from '../IUsersList';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() newUser = new EventEmitter<IUsersList>();
  public name :string = "";
  public job :string = "";
  Clear(){
    this.name = "";
    this.job = ""
  }
  addUser(){
    if (!((this.name=="")&&(this.job==""))){
        this.newUser.emit(
        {
          name:this.name,
          job:this.job
        }
      );
      this.Clear();
      }
    }
}
