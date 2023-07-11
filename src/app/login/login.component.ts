import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Happy Banking With Us"
  placedata="Enter account no"

  constructor() {}

  ngOnInit():void{

  }


  login(){
    alert("Login Clicked")
  }

}
