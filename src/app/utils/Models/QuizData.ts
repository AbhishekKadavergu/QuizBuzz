import { Quiz } from 'src/app/utils/Models/Quiz';
import { IQuiz } from "./Quiz";
import { IQuizQuestion } from "./QuizQuestions";

export interface IQuizData extends IQuiz{
  quizQuestions:IQuizQuestion[]
}

export class QuizData extends Quiz{

  quizQuestions:IQuizQuestion[];

  constructor(data?:IQuizData){
    super(data);
    this.quizQuestions=data?data.quizQuestions:[]
  }
}
