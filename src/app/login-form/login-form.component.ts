import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  @Output() onSubmitLoginEvent= new EventEmitter();
  @Output() onSubmitRegisterEvent= new EventEmitter();


  active: string= "login";
  firstName : string="";
  lastName:string="";
  email: string= "";
  password: string= "";

  //Methodes to switch beetwen login form and register form
  onLoginTab(): void{
    this.active= "login";
  }

  onRegisterTab(): void{
    this.active= "register";
}


  onSubmitLogin(): void{
    this.onSubmitLoginEvent.emit({"email": this.email, "password": this.password});
    window.localStorage.clear();  // clear localStorage
  }


  onSubmitRegister(): void{
    this.onSubmitRegisterEvent.emit({
      "firstName": this.firstName, "lastName": this.lastName,
      "email": this.email, "password": this.password});
     window.localStorage.clear();
  }

}
