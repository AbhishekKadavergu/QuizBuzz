import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { createReducer, on } from '@ngrx/store';
import { IQuiz } from "src/app/utils/Models/Quiz";
import { SelectQuiz, SelectQuizQuestions, ClearQuiz, ClearQuizQuestions, LoadQuizList, EditQuiz, ResetEditQuiz } from './quiz.actions';
import { IQuizData } from 'src/app/utils/Models/QuizData';



const initialState={
  quizList:<Array<IQuiz>>[],
  currentQuiz:<IQuiz>{},
  currentQuizQuestions:<Array<IQuizQuestions>>[],
  currentEditQuiz:<IQuizData>{}
}

export const quizReducer = createReducer(
  initialState,
  on(SelectQuiz,(state,payload)=>{
    return {
      ...state,
      currentQuiz:payload.quizInfo
    };
  }),
  on(SelectQuizQuestions,(state,payload)=>{
    return {
      ...state,
      currentQuizQuestions:payload.quizQuestions
    }
  }),
  on(ClearQuiz,(state)=>{
    return {
      ...state,
      currentQuiz:<IQuiz>{}
    }
  }),
  on(ClearQuizQuestions,(state)=>{
    return {
      ...state,
      currentQuizQuestions:<Array<IQuizQuestions>>[]
    }
  }),
  on(LoadQuizList,(state,payload)=>{
    return {
      ...state,
      quizList:payload.quizlist
    }
  }),
  on(EditQuiz,(state,payload)=>{
    return {
      ...state,
      currentEditQuiz:payload.quizData
    }
  }),
  on(ResetEditQuiz,(state)=>{
    return {
      ...state,
      currentEditQuiz:<IQuizData>{}
    }
  })
)

