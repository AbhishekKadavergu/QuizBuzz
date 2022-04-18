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

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  quizForm;
  actualAnswerDropdown: IDropdown[];
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    let sd = new Date();
    let ed = new Date();

    this.quizForm = this.fb.group({
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

  get questionList() {
    return this.quizForm.get('quizQuestions') as FormArray;
  }

  addQuestion() {
    this.quizQuestions.push(this.questionForm);
  }

  ngOnInit(): void {}

  getOptions(question: AbstractControl) {
    return question.get('options') as FormArray;
  }

  getAsGroup(question: AbstractControl) {
    return question as FormGroup;
  }

  onCreateQuiz() {
    let quizInfo = new Quiz(this.quizForm.value);
    let quizQuestionsList = this.quizForm.value.quizQuestions.map(
      (question: IQuizQuestions) => new QuizQuestions(question)
    );
    this.store.dispatch(CreateQuizRest({quizInfo: quizInfo,quizQuestions: quizQuestionsList}));
  }
}
