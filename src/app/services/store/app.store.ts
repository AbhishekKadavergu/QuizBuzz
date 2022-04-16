import { IAuth } from './../../utils/Models/Auth';
import { ActionReducerMap } from '@ngrx/store';
import { IUser } from '../../utils/Models/User';
import { AuthReducer } from './auth/auth.reducer';


export interface AppState{
  auth:IAuth
}

export const AppReducer:ActionReducerMap<AppState> ={
  auth:AuthReducer
}
