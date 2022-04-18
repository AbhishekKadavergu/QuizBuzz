
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { IQuiz } from './../../../utils/Models/Quiz';
import { createAction, props } from '@ngrx/store';

export const CreateQuizRest = createAction(
  '[Create Quiz] creating the quiz',
  props<{quizInfo:IQuiz,quizQuestions:IQuizQuestions[]}>()
)

export const SelectQuiz = createAction(
  '[Select Quiz] selecting a quiz',
  props<{quizInfo:IQuiz}>()
)

export const SelectQuizQuestions = createAction(
  '[Select Quiz Questions] selecting the quiz questions',
  props<{quizQuestions:IQuizQuestions[]}>()
)

export const ClearQuiz = createAction(
  '[Clear Quiz] Clearing the Quiz'
)

export const ClearQuizQuestions = createAction(
  '[Clear Questions] clearing the quiz questions'
)

export const LoadQuizListRest = createAction(
  '[Load Quiz rest] load the quiz list from rest'
)

export const LoadQuizList = createAction(
  '[Load Quiz] load quiz to ui',
  props<{quizlist:IQuiz[]}>()
)
