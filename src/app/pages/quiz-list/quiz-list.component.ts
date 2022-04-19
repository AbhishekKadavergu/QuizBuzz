import { EditQuizRest } from './../../services/store/quiz/quiz.actions';
import { RedirectToPage } from './../../services/store/ui/ui.actions';

import { quizListSelector } from './../../services/store/quiz/quiz.selectors';
import { userSelector } from './../../services/store/auth/auth.selectors';
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

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizList:{header:{header:string,field:string,type:string}[],body:IQuiz[]};
  selectedQuiz:IQuiz;
  user!:Observable<IUser>;
  quizListSub!:Subscription;

  constructor(private confirmationService: ConfirmationService,private router:Router,private store:Store<AppState>) {
    this.quizList={
      header:[
        {header:'Quiz Name',field:'name',type:'string'},
        {header:'Start Time',field:'startTime',type:'date'},
        {header:'End Time',field:'endTime',type:'date'},
        {header:'Marks',field:'marks',type:'number'},
        {header:'No of Attempts',field:'noAttempts',type:'string'},
        {header:'Result',field:'result',type:'string'}
      ],
      body:[]
    }
    this.selectedQuiz=new Quiz();
   }

  ngOnInit(): void {
    this.user=this.store.pipe(map(state=>userSelector(state)));
    this.quizListSub=this.store.pipe(map(state=>quizListSelector(state))).subscribe((quizList:IQuiz[])=>{
      this.quizList.body=quizList;
    });
    this.store.dispatch(LoadQuizListRest());
  }

  ngOnDestroy(){
    this.quizListSub?.unsubscribe();
  }




  onAttempt(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key:"quizlist",
      accept: () => {
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
        this.store.dispatch(EditQuizRest({id:this.selectedQuiz.id}));
      }
  });
  }



}
