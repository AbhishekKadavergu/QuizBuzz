import { userIdSelector } from './../../services/store/auth/auth.selectors';
import { ConfirmationService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { QuizQuestions } from './../../utils/Models/QuizQuestions';
import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { IQuizQuestion } from 'src/app/utils/Models/QuizQuestions';
import { AppState } from 'src/app/services/store/app.store';
import { FormBuilder, NgForm } from '@angular/forms';
import { currentQuizSelector } from 'src/app/services/store/quiz/quiz.selectors';
import { IQuizData } from 'src/app/utils/Models/QuizData';
import { SubmitQuizRest } from 'src/app/services/store/quiz/quiz.actions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  quiz!: IQuiz;
  quizQuestions!: IQuizQuestion[];
  quizSub!: Subscription;
  quizId!: string;
  userId!: string;
  userIdSub!: Subscription;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService
  ) {
    this.quiz = new Quiz();
  }

  ngOnDestroy() {
    this.quizSub?.unsubscribe();
    this.userIdSub?.unsubscribe();
  }

  ngOnInit(): void {
    this.userIdSub = this.store
      .pipe(map((state) => userIdSelector(state)))
      .subscribe((userId: string) => {
        this.userId = userId;
      });
    this.quizSub = this.store
      .pipe(map((state) => currentQuizSelector(state)))
      .subscribe((quizData: IQuizData) => {
        if (quizData.id) {
          this.quiz = new Quiz(quizData);
          this.quizId = quizData.id;
          this.quizQuestions = quizData.quizQuestions.map(
            (question) => new QuizQuestions(question)
          );
        }
      });
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to edit this quiz?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'quiz',
      accept: () => {
        this.store.dispatch(
          SubmitQuizRest({
            id: this.quizId,
            userId: this.userId,
            quizQuestions: this.quizQuestions,
          })
        );
      },
    });
  }
}
