import { IUser } from './../../../utils/Models/User';
import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  LOGIN = '[Logging In User]',
  SIGNUP = '[Signing Up User]',
}

export class AuthLogin implements Action {
  readonly type = AuthActionsTypes.LOGIN;
  constructor(public payload: IUser) {}
}

export type AuthActions = AuthLogin;
