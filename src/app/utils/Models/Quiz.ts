
export interface IQuiz{
  id:string;
  name:string;
  startTime:Date|null;
  endTime:Date|null;
  marks:number;
  noAttempts:number,
  attempted:number,
  result:{
    id:string
    userId:string
    attempts:number,
    score:number,
    grade:string
  }[];
}

export class Quiz{
  id:string;
  name:string;
  startTime:Date|null;
  endTime:Date|null;
  marks:number;
  result:{
    id:string
    userId:string,
    attempts:number,
    score:number,
    grade:string
  }[];
  noAttempts:number;
  attempted:number;
  constructor(data?:IQuiz){
    this.id=data?data.id:"";
    this.name=data?data.name:"";
    this.startTime=data?data.startTime:null;
    this.endTime=data?data.endTime:null;
    this.marks=data?data.marks:0;
    this.result=data?data.result:[];
    this.noAttempts=data?data.noAttempts:1;
    this.attempted=data?data.attempted?data.attempted:0:0;
  }
}


