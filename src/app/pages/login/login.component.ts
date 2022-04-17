import { AuthActions, AuthLogin } from './../../services/store/auth/auth.actions';
import { RandomService } from './../../services/util/random.service';
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/Models/User';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';
import { Auth } from 'src/app/utils/Models/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private store:Store<AppState>,private random:RandomService) { }
  showPassword:boolean=false;

  ngOnInit(): void {
  }

  onSubmitLogin(loginForm:NgForm){
    let user = new User();
    user.id=this.random.generateString(10);
    user.name="dvs";
    user.isAdmin=true;
    user.mail=loginForm.value.mail;
    let auth = new Auth();
    auth.user=user;
    auth.isLoggedIn=true;
    auth.token="token";
    this.store.dispatch(new AuthLogin(auth));
    this.router.navigateByUrl("/home/quizlist");
  }


}
