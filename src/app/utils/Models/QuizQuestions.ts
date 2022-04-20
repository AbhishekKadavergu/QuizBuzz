
export interface IQuizQuestion{
  id:string;
  question:string;
  options:string[];
  selectedAnswer:string;
  actualAnswer:string;
  marks:number;
}

export class QuizQuestions{
  id:string;
  question:string;
  options:string[];
  selectedAnswer:string;
  actualAnswer:string;
  marks:number;
  constructor(data?:IQuizQuestion){
    this.id=data?data.id:"";
    this.question=data?data.question:"";
    this.selectedAnswer=data?data.selectedAnswer:"";
    this.actualAnswer=data?data.actualAnswer:"";
    this.marks=data?data.marks:0;
    this.options=data?data.options:[];
  }
}
