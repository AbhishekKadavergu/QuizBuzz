import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { ITable } from './../../utils/Models/ITable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit {

  quizList:ITable;
  selectedQuiz:IQuiz;
  constructor() {
    this.quizList={
      header:[
        {header:'Quiz Name',field:'name',type:'string'},
        {header:'Start Time',field:'startTime',type:'date'},
        {header:'End Time',field:'endTime',type:'date'},
        {header:'Marks',field:'marks',type:'number'},
        {header:'No of Attempts',field:'attempts',type:'string'},
        {header:'Result',field:'result',type:'string'}
      ],
      body:[
        {id:"1",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"2",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"3",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"4",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"5",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"6",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"},
        {id:"7",name:"Quizz",startTime:new Date(),endTime:new Date(),marks:100,attempts:"10/10",result:"Not Evaluated"}
      ]
    }
    this.selectedQuiz=new Quiz();
   }

  ngOnInit(): void {
  }

  onRowSelected(quiz:IQuiz){
    console.log(quiz);
  }

}
