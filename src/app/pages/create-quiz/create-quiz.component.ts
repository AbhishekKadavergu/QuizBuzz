import { isEditModeSelector } from './../../services/store/quiz/quiz.selectors';
import { map, Subscription } from 'rxjs';
import { IQuizQuestions } from 'src/app/utils/Models/QuizQuestions';
import { QuizQuestions } from './../../utils/Models/QuizQuestions';
import { Quiz } from 'src/app/utils/Models/Quiz';
import { CreateQuizRest } from './../../services/store/quiz/quiz.actions';
import { Dropdown, IDropdown } from './../../utils/Models/Dropdown';

import {
  FormArray,
  FormBuilder,
  Validators,
  AbstractControl,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';
import { currentQuizSelector } from 'src/app/services/store/quiz/quiz.selectors';
import { IQuizData } from 'src/app/utils/Models/QuizData';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  quizForm;
  actualAnswerDropdown: IDropdown[];
  currentEditQuizSub!:Subscription;
  isEditModeSub!:Subscription;
  isEditMode:boolean;
  editQuizId!:string;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    let sd = new Date();
    let ed = new Date();
    this.isEditMode=false;
    this.quizForm = this.fb.group({
      id:[''],
      name: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      marks: [1, [Validators.required]],
      noAttempts: [1, [Validators.required]],
      quizQuestions: this.fb.array([]),
    });
    this.addQuestion();
    this.actualAnswerDropdown = [
      new Dropdown({ label: 'Option 1', value: 0 }),
      new Dropdown({ label: 'Option 2', value: 1 }),
      new Dropdown({ label: 'Option 3', value: 2 }),
      new Dropdown({ label: 'Option 4', value: 3 }),
    ];
  }

  get quizQuestions() {
    return this.quizForm.get('quizQuestions') as FormArray;
  }

  get questionForm() {
    return this.fb.group({
      question: ['', [Validators.required]],
      options: this.fb.array([
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required]),
        this.fb.control('', [Validators.required]),
      ]),
      marks: [1, [Validators.required]],
      actualAnswer: ['', [Validators.required]],
    });
  }

  populatedQuestionForm(question:IQuizQuestions) {
    return this.fb.group({
      question: [question.question, [Validators.required]],
      options: this.fb.array([
        this.fb.control(question.options[0], [Validators.required]),
        this.fb.control(question.options[1], [Validators.required]),
        this.fb.control(question.options[2], [Validators.required]),
        this.fb.control(question.options[3], [Validators.required]),
      ]),
      marks: [question.marks, [Validators.required]],
      actualAnswer: [question.actualAnswer, [Validators.required]],
    });
  }

  get questionList() {
    return this.quizForm.get('quizQuestions') as FormArray;
  }

  addQuestion() {
    this.quizQuestions.push(this.questionForm);
  }

  ngOnInit(): void {
    this.currentEditQuizSub=this.store.pipe(map(state=>currentQuizSelector(state)))
    .subscribe((finalquizData:IQuizData)=>{
      let quizData:any={...finalquizData};
      if(quizData.id){
        this.editQuizId=quizData.id;
        quizData.startTime=new Date(quizData.startTime?quizData.startTime:"");
        quizData.endTime=new Date(quizData.endTime?quizData.endTime:"");
        Object.keys(this.quizForm.controls).forEach(item=>{
          if(item==='quizQuestions'){
            this.quizQuestions.clear();
            quizData.quizQuestions.forEach((question:IQuizQuestions) => {
              this.quizQuestions.push(this.populatedQuestionForm(question));
            });
          }else{
            this.quizForm.controls[item].setValue(quizData[item]);
          }
        })
      }
    })
    this.isEditModeSub=this.store.pipe(map(state=>isEditModeSelector(state)))
    .subscribe((mode:boolean)=>{
      this.isEditMode=mode;
    })
  }

  ngOnDestroy(){
    this.currentEditQuizSub?.unsubscribe();
    this.isEditModeSub?.unsubscribe();
  }

  getOptions(question: AbstractControl) {
    return question.get('options') as FormArray;
  }

  getAsGroup(question: AbstractControl) {
    return question as FormGroup;
  }

  getQuizData(){
    let quizInfo = new Quiz(this.quizForm.value);
    if(this.isEditMode){
      quizInfo.id=this.editQuizId;
    }
    let quizQuestionsList = this.quizForm.value.quizQuestions.map(
      (question: IQuizQuestions) => new QuizQuestions(question)
    );
    let quizData={quizInfo: quizInfo,quizQuestions: quizQuestionsList};
    return quizData;
  }

  onCreateQuiz() {
    this.store.dispatch(CreateQuizRest(this.getQuizData()));
  }
}
