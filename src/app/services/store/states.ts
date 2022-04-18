import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { IQuiz } from './../../utils/Models/Quiz';
import { IToast } from './../../utils/Models/Toast';
import { IAuth } from './../../utils/Models/Auth';


export interface AuthState extends IAuth{

}

export interface UIState{
  loading:boolean
  toast:IToast
}



export interface QuizState{
  quizList:IQuiz[],
  selectedQuiz:IQuiz,
  selectedQuizQuestions:IQuizQuestions[]
}
