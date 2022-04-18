import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { createReducer, on } from '@ngrx/store';
import { IQuiz, Quiz } from "src/app/utils/Models/Quiz";
import { SelectQuiz, SelectQuizQuestions, ClearQuiz, ClearQuizQuestions, LoadQuizList } from './quiz.actions';



const initialState={
  quizList:<Array<IQuiz>>[],
  selectedQuiz:<IQuiz>{},
  selectedQuizQuestions:<Array<IQuizQuestions>>[]
}

export const quizReducer = createReducer(
  initialState,
  on(SelectQuiz,(state,payload)=>{
    return {
      ...state,
      selectedQuiz:payload.quizInfo
    };
  }),
  on(SelectQuizQuestions,(state,payload)=>{
    return {
      ...state,
      selectedQuizQuestions:payload.quizQuestions
    }
  }),
  on(ClearQuiz,(state)=>{
    return {
      ...state,
      selectedQuiz:<IQuiz>{}
    }
  }),
  on(ClearQuizQuestions,(state)=>{
    return {
      ...state,
      selectedQuizQuestions:<Array<IQuizQuestions>>[]
    }
  }),
  on(LoadQuizList,(state,payload)=>{
    return {
      ...state,
      quizList:payload.quizlist
    }
  })
)

