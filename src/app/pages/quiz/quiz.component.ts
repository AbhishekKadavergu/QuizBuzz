import { Store } from '@ngrx/store';
import { QuizQuestions } from './../../utils/Models/QuizQuestions';
import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { AppState } from 'src/app/services/store/app.store';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {


  quiz!:IQuiz;
  quizQuestions:IQuizQuestions[];
  quizSub!:Subscription;

  constructor(private store:Store<AppState>) {
    let question = new QuizQuestions();
    question.question="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quo voluptas corrupti et repellat at exercitationem provident iusto? Veniam quis quo repellendus consequuntur quibusdam exercitationem dolore reprehenderit suscipit ab. Ut?";
    question.options=["A","B"];
    question.selectedAnswer="null";
    question.actualAnswer="B";
    question.marks=10;
    this.quizQuestions=[];
    this.quizQuestions.push(question);
    this.quiz=new Quiz();
    this.quiz.name="Quiz"
   }

  ngOnInit(): void {

  }


}
