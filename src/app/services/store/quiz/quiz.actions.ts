
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { IQuiz } from './../../../utils/Models/Quiz';
import { createAction, props } from '@ngrx/store';
import { IQuizData } from 'src/app/utils/Models/QuizData';

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

export const DeleteQuizRest = createAction(
  '[Delete Quiz] deleting the quiz',
  props<{id:string}>()
)

export const EditQuizRest = createAction(
  '[Edit Quiz] getting the data for editing the quiz',
  props<{id:string}>()
)

export const EditQuiz = createAction(
  '[Edit Quiz] setting the data for editing the quiz',
  props<{quizData:IQuizData}>()
)

export const ResetEditQuiz = createAction(
  '[Edit Quiz] Reset the edit quiz data in state after editing done'
)
