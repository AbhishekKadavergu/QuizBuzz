import { IUser, User } from './../../utils/Models/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  user = new BehaviorSubject<IUser>(new User());

  constructor() { }

  setUser(user:IUser){
    this.user.next(user);
  }
}
