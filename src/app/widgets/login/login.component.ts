import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  //@ViewChild('loginForm') loginForm: any;

  ngOnInit(): void {
  }

  onSubmitLogin(loginForm:NgForm){
    console.log(loginForm.value);
  }


}
