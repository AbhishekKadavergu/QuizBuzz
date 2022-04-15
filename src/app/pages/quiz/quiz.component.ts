import { QuizQuestions } from './../../utils/Models/QuizQuestions';
import { IQuiz } from './../../utils/Models/Quiz';
import { DataStoreService } from './../../services/store/data-store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit,OnDestroy {


  quiz!:IQuiz;
  quizQuestions:IQuizQuestions[];
  quizSub!:Subscription;

  constructor(private store:DataStoreService) {
    let question = new QuizQuestions();
    question.question="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quo voluptas corrupti et repellat at exercitationem provident iusto? Veniam quis quo repellendus consequuntur quibusdam exercitationem dolore reprehenderit suscipit ab. Ut?";
    question.options=["A","B"];
    question.selectedAnswer="null";
    question.actualAnswer="B";
    question.marks=10;
    this.quizQuestions=[];
    this.quizQuestions.push(question);
   }

  ngOnInit(): void {
    this.quizSub=this.store.selectedQuiz.subscribe((selectedQuiz:IQuiz)=>{
      this.quiz=selectedQuiz;
      this.quiz.name="QuizName";
    });
  }

  ngOnDestroy(){
    this.quizSub?.unsubscribe();
  }

}
