import { RedirectToPage, ShowToast } from './../ui/ui.actions';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap } from 'rxjs';
import {
  AttemptQuizRest,
  CreateQuizRest,
  DeleteQuizRest,
  LoadQuiz,
  LoadQuizRest,
  LoadQuizList,
  LoadQuizListRest,
  SubmitQuizRest,
} from './quiz.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Toast } from 'src/app/utils/Models/Toast';

@Injectable()
export class QuizEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  createQuiz = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateQuizRest),
      switchMap((payload) => {
        return this.http
          .post(environment.api + '/createquiz', {
            ...payload.quizInfo,
            quizQuestions: [...payload.quizQuestions],
          })
          .pipe(
            mergeMap((response: any) => {
              if (response.status) {
                let toast = new Toast(response);
                toast.show = true;
                return [
                  RedirectToPage({ page: '/home/quizlist' }),
                  ShowToast({ toast: toast }),
                ];
              } else {
                let toast = new Toast(response);
                toast.show = true;
                return [ShowToast({ toast: toast })];
              }
            })
          );
      })
    );
  });

  loadQuizRest = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadQuizListRest),
      switchMap(() => {
        return this.http.get(environment.api + '/getquizlist').pipe(
          mergeMap((response: any) => {
            if (response.status) {
              return [LoadQuizList({ quizlist: response.data })];
            } else {
              let toast = new Toast(response);
              toast.show = true;
              return [ShowToast({ toast: toast })];
            }
          })
        );
      })
    );
  });

  deleteQuiz = createEffect(() => {
    return this.actions$.pipe(
      ofType(DeleteQuizRest),
      switchMap((payload) => {
        return this.http
          .post(environment.api + '/deletequiz', { id: payload.id })
          .pipe(
            mergeMap((response: any) => {
              if (response.status) {
                return [LoadQuizListRest()];
              } else {
                let toast = new Toast(response);
                toast.show = true;
                return [ShowToast({ toast: toast })];
              }
            })
          );
      })
    );
  });

  editQuiz = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadQuizRest),
      switchMap((payload) => {
        return this.http
          .post(environment.api + '/editquiz', { id: payload.id })
          .pipe(
            mergeMap((response: any) => {
              if (response.status) {
                return [LoadQuiz({ quizData: response.data })];
              } else {
                let toast = new Toast(response);
                toast.show = true;
                return [ShowToast({ toast: toast })];
              }
            })
          );
      })
    );
  });

  submitQuiz = createEffect(() => {
    return this.actions$.pipe(
      ofType(SubmitQuizRest),
      switchMap((payload) => {
        return this.http
          .post(environment.api + '/submitquiz', {
            userId:payload.userId,
            id: payload.id,
            quizQuestions: payload.quizQuestions,
          })
          .pipe(
            mergeMap((response: any) => {
              let toast = new Toast(response);
              toast.show = true;
              if (response.status) {
                return [
                  ShowToast({ toast: toast }),
                  RedirectToPage({ page: '/home/quizlist' }),
                ];
              } else {
                return [ShowToast({ toast: toast })];
              }
            })
          );
      })
    );
  });
}
