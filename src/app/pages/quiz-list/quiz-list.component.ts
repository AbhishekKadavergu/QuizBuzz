import { LoadQuizRest, ClearQuiz } from './../../services/store/quiz/quiz.actions';
import { RedirectToPage, ShowToast } from './../../services/store/ui/ui.actions';

import { quizListSelector } from './../../services/store/quiz/quiz.selectors';
import { userSelector, userIdSelector, isAdminSelector } from './../../services/store/auth/auth.selectors';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IUser, User } from './../../utils/Models/User';
import { Router } from '@angular/router';
import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AppState } from 'src/app/services/store/app.store';
import { DeleteQuizRest, LoadQuizListRest } from 'src/app/services/store/quiz/quiz.actions';
import { registerLocaleData } from '@angular/common';
import { Toast } from 'src/app/utils/Models/Toast';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizList:{header:{header:string,field:string,type:string}[],body:IQuiz[]};
  selectedQuiz:IQuiz;
  isAdminSub!:Subscription;
  quizListSub!:Subscription;
  isAdmin:boolean=false;
  displayResult:boolean=false;
  quizResult:{header:{header:string,field:string,type:string}[],body:{userId:string,score:number,attempts:number,id:string,grade:string}[]};

  constructor(private confirmationService: ConfirmationService,private router:Router,private store:Store<AppState>) {
    this.quizList={
      header:[
        {header:'Quiz Name',field:'name',type:'string'},
        {header:'Start Time',field:'startTime',type:'date'},
        {header:'End Time',field:'endTime',type:'date'},
        {header:'Marks',field:'marks',type:'number'},
        {header:'No of Attempts',field:'noAttempts',type:'string'},
        {header:'Result',field:'result',type:'result'}
      ],
      body:[]
    }
    this.quizResult={
      header:[
        {header:'QuizID',field:'id',type:'string'},
        {header:'Mail ID',field:'userId',type:'string'},
        {header:'Attempts',field:'attempts',type:'attempts'},
        {header:'Score',field:'score',type:'string'},
        {header:'Grade',field:'grade',type:'grade'},
      ],
      body:[]
    }
    this.selectedQuiz=new Quiz();
   }

  ngOnInit(): void {
    this.isAdminSub=this.store.pipe(map(state=>isAdminSelector(state))).subscribe((isAdmin:boolean)=>{
      if(isAdmin){
        this.quizList.header=this.quizList.header.filter(h=>h.field!=='result');
      }
      this.isAdmin=isAdmin;
    })
    this.quizListSub=this.store.pipe(map(state=>quizListSelector(state))).subscribe((quizList:IQuiz[])=>{
      this.quizList.body=quizList;
    });
    this.store.dispatch(LoadQuizListRest());
  }

  ngOnDestroy(){
    this.quizListSub?.unsubscribe();
    this.isAdminSub?.unsubscribe();
  }




  onAttempt(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key:"quizlist",
      accept: () => {
        if(this.selectedQuiz.result.length){
          if(this.selectedQuiz.result[0].attempts>=this.selectedQuiz.noAttempts){
            let toast = new Toast();
            toast.detail="Max number of allowed attempts exceeded";
            toast.summary="Attempts Exceeded";
            toast.severity="info";
            toast.show=true;
            this.store.dispatch(ShowToast({toast:toast}));
            return;
          }
        }
        this.store.dispatch(LoadQuizRest({id:this.selectedQuiz.id}));
        this.store.dispatch(RedirectToPage({page:"/home/quiz"}));
      }
  });
  }

resetQuiz(){
  this.selectedQuiz=new Quiz();
}

  onDelete(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this quiz?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key:"quizlist",
      accept: () => {
        this.store.dispatch(DeleteQuizRest({id:this.selectedQuiz.id}));
      }
  });
  }

  onEdit(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to edit this quiz?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key:"quizlist",
      accept: () => {
        this.store.dispatch(LoadQuizRest({id:this.selectedQuiz.id}));
        this.store.dispatch(RedirectToPage({page:"/home/createQuiz"}));
      }
  });
  }

  onCreate(){
    this.store.dispatch(ClearQuiz());
    this.store.dispatch(RedirectToPage({page:"/home/createQuiz"}));
  }

  onResult(){
    this.quizResult.body=this.selectedQuiz.result;
    this.displayResult=true;
  }



}
