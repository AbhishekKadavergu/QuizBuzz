import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  showPassword:boolean=false;

  ngOnInit(): void {
  }

  onSubmitLogin(loginForm:NgForm){
    console.log(loginForm.value);
    this.router.navigateByUrl("/home/quizlist");
  }


}
