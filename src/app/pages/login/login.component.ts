import { RandomService } from './../../services/util/random.service';
import { DataStoreService } from '../../services/store/data-store.service';
import {  Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/utils/Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private store:DataStoreService,private random:RandomService) { }
  showPassword:boolean=false;

  ngOnInit(): void {
  }

  onSubmitLogin(loginForm:NgForm){
    console.log(loginForm.value);
    let user = new User();
    user.id=this.random.generateString(10);
    user.name="dvs";
    user.isAdmin=false;
    user.mail=loginForm.value.mail;
    this.store.setUser(user);
    this.router.navigateByUrl("/home/quizlist");
  }


}
