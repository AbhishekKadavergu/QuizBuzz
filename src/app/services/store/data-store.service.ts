import { IQuiz, Quiz } from './../../utils/Models/Quiz';
import { IUser, User } from './../../utils/Models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  user = new BehaviorSubject<IUser>(new User());
  selectedQuiz = new BehaviorSubject<IQuiz>(new Quiz());

  constructor() { }

  setUser(user:IUser){
    this.user.next(user);
  }
  setSelectedQuiz(quiz:IQuiz){
    this.selectedQuiz.next(quiz);
  }
}
