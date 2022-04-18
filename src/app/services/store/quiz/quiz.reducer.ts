import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { createReducer, on } from '@ngrx/store';
import { IQuiz, Quiz } from "src/app/utils/Models/Quiz";
import { SelectQuiz, SelectQuizQuestions, ClearQuiz, ClearQuizQuestions, LoadQuizList } from './quiz.actions';



const initialState={
  quizList:<Array<IQuiz>>[],
  currentQuiz:<IQuiz>{},
  currentQuizQuestions:<Array<IQuizQuestions>>[]
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
  })
)

