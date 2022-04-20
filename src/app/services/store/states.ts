import { IQuizQuestion } from 'src/app/utils/Models/QuizQuestions';
import { IQuiz } from './../../utils/Models/Quiz';
import { IToast } from './../../utils/Models/Toast';
import { IAuth } from './../../utils/Models/Auth';
import { IQuizData } from 'src/app/utils/Models/QuizData';


export interface AuthState extends IAuth{

}

export interface UIState{
  loading:boolean
  toast:IToast
}



export interface QuizState{
  quizList:IQuiz[],
  currentEditQuiz:IQuizData
}
