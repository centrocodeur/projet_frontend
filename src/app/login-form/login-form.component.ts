import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() onSubmmitLoginEvent= new EventEmitter();

  login: string= "";
  password: string= "";

  onSubmitLogin(): void{
    this.onSubmmitLoginEvent.emit({"login": this.login, "password": this.password});
  }


}
