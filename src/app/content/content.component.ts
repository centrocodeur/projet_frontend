import { Component } from '@angular/core';
import {AxiosService} from "../axios.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow: string= "Welcome";

  constructor(private  axiosService: AxiosService) {
  }

  showComponent(componentToShow: string):void{
    this.componentToShow= componentToShow;
  }
  onLogin(input: any) {
    this.axiosService.request(
      "POST",
      "/login",
      {
        email: input.email, // change login to email
        password: input.password
      }

    ).then(response =>{
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow= "messages";
    });

  }
  onRegister(input: any):void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email, // change login to email
        password: input.password
      }
    ).then(response =>{
      this.axiosService.setAuthToken(response.data.token);
      this.componentToShow= "messages";
    });

  }
}
