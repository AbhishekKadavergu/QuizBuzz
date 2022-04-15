
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  quizForm;
  questionForm;
  constructor(private fb:FormBuilder) {
    let sd=new Date();
    let ed=new Date();
    this.questionForm=this.fb.group({
      question:['',[Validators.required]],
      options:this.fb.array([
        this.fb.control("",Validators.required),
        this.fb.control("",Validators.required),
        this.fb.control("",Validators.required),
        this.fb.control("",Validators.required),
      ]),
      marks:['',[Validators.required]],
      actualAnswer:['',[Validators.required]]
    });
    this.quizForm=this.fb.group({
      name:['',[Validators.required]],
      startTime:[sd,[Validators.required]],
      endDate:[ed,[Validators.required]],
      marks:[0,[Validators.required]],
      noAttempts:[0,[Validators.required]],
      quizQuestions:this.fb.array([
        this.questionForm
      ])
    })
  }

  get quizQuestions(){
    return this.quizForm.get('quizQuestions') as FormArray;
  }

  get options(){
    return this.questionForm.get("options") as FormArray;
  }

  addQuestion(){
    this.quizQuestions.push(this.questionForm);
  }

  ngOnInit(): void {
  }

  onCreateQuiz(){
    console.log(this.quizForm.value);
  }

}
