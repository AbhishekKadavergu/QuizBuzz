
import { FormArray, FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {

  quizForm;
  constructor(private fb:FormBuilder) {
    let sd=new Date();
    let ed=new Date();

    this.quizForm=this.fb.group({
      name:['',[Validators.required]],
      startTime:['',[Validators.required]],
      endTime:['',[Validators.required]],
      marks:['',[Validators.required]],
      noAttempts:['',[Validators.required]],
      quizQuestions:this.fb.array([
      ])
    });
    this.addQuestion();
  }

  get quizQuestions(){
    return this.quizForm.get('quizQuestions') as FormArray;
  }

  get questionForm(){
    return this.fb.group({
      question:['',[Validators.required]],
      options:this.fb.array([
        this.fb.control("",[Validators.required]),
        this.fb.control("",[Validators.required]),
        this.fb.control("",[Validators.required]),
        this.fb.control("",[Validators.required])
      ]),
      marks:['',[Validators.required]],
      actualAnswer:['',[Validators.required]]
    })
  }

  get questionList(){
    return this.quizForm.get("quizQuestions") as FormArray
  }

  addQuestion(){
    this.quizQuestions.push(this.questionForm);
  }

  ngOnInit(): void {
  }

  getOptions(question:AbstractControl){
    return question.get('options') as FormArray;
  }

  getAsGroup(question:AbstractControl){
    return question as FormGroup;
  }

  onCreateQuiz(){
    console.log(this.quizForm.value);
  }

}
