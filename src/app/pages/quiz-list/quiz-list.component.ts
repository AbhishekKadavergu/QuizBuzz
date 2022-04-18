import { IAuth } from './../../utils/Models/Auth';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser, User } from './../../utils/Models/User';
import { Router } from '@angular/router';
import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { ITable } from '../../utils/Models/Table';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AppState } from 'src/app/services/store/app.store';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit,OnDestroy {

  quizList:ITable;
  selectedQuiz:IQuiz;
  user:IUser;
  userSub!:Subscription;

  constructor(private confirmationService: ConfirmationService,private router:Router,private store:Store<AppState>) {
    this.quizList={
      header:[
        {header:'Quiz Name',field:'name',type:'string'},
        {header:'Start Time',field:'startTime',type:'date'},
        {header:'End Time',field:'endTime',type:'date'},
        {header:'Marks',field:'marks',type:'number'},
        {header:'No of Attempts',field:'attempts',type:'string'},
        {header:'Result',field:'result',type:'string'}
      ],
      body:[

      ]
    }
    this.selectedQuiz=new Quiz();
    this.user=new User();
   }

  ngOnInit(): void {
    this.userSub=this.store.select("auth").pipe(
      map((auth:IAuth)=>auth.user)
    ).subscribe((user:IUser)=>{
      this.user=user;
    })
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }



  onAttempt(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key:"attempt",
      accept: () => {
        this.router.navigateByUrl("/home/quiz");
      }
  });
  }



  onDelete(){

  }



}
