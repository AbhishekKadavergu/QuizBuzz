import { Quiz } from 'src/app/utils/Models/Quiz';
import { IQuiz } from "./Quiz";
import { IQuizQuestions } from "./QuizQuestions";

export interface IQuizData extends IQuiz{
  quizQuestions:IQuizQuestions[]
}

export class QuizData extends Quiz{

  quizQuestions:IQuizQuestions[];

  constructor(data?:IQuizData){
    super(data);
    this.quizQuestions=data?data.quizQuestions:[]
  }
}
