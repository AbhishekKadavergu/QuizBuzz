import { IQuizQuestion } from 'src/app/utils/Models/QuizQuestions';
import { createReducer, on } from '@ngrx/store';
import { IQuiz } from "src/app/utils/Models/Quiz";
import { LoadQuizList, LoadQuiz, ResetEditQuiz, ClearQuiz } from './quiz.actions';
import { IQuizData } from 'src/app/utils/Models/QuizData';



const initialState={
  quizList:<Array<IQuiz>>[],
  currentEditQuiz:<IQuizData>{}
}

export const quizReducer = createReducer(
  initialState,
  on(LoadQuizList,(state,payload)=>{
    return {
      ...state,
      quizList:payload.quizlist
    }
  }),
  on(LoadQuiz,(state,payload)=>{
    return {
      ...state,
      currentEditQuiz:payload.quizData
    }
  }),
  on(ClearQuiz,(state)=>{
    return {
      ...state,
      currentEditQuiz:<IQuizData>{}
    }
  })
)

