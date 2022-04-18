import { AuthLoginRest } from './../../services/store/auth/auth.actions';
import { RandomService } from './../../services/util/random.service';
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';


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
    this.store.dispatch(AuthLoginRest(loginForm.value));
  }


}
