
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { IQuiz } from './../../../utils/Models/Quiz';
import { createAction, props } from '@ngrx/store';
import { IQuizData } from 'src/app/utils/Models/QuizData';

export const CreateQuizRest = createAction(
  '[Create Quiz] creating the quiz',
  props<{quizInfo:IQuiz,quizQuestions:IQuizQuestions[]}>()
)








export const LoadQuizListRest = createAction(
  '[Load Quiz rest] load the quiz list from rest'
)

export const LoadQuizList = createAction(
  '[Load Quiz] load quiz to ui',
  props<{quizlist:IQuiz[]}>()
)

export const DeleteQuizRest = createAction(
  '[Delete Quiz] deleting the quiz',
  props<{id:string}>()
)

export const LoadQuizRest = createAction(
  '[Edit Quiz] getting the data for editing the quiz',
  props<{id:string}>()
)

export const LoadQuiz = createAction(
  '[Edit Quiz] setting the data for editing the quiz',
  props<{quizData:IQuizData}>()
)

export const ResetEditQuiz = createAction(
  '[Edit Quiz] Reset the edit quiz data in state after editing done'
)

export const AttemptQuizRest = createAction(
  '[Quiz] load quiz questions',
  props<{id:string}>()
)
