import { IAuth } from './../../../utils/Models/Auth';
import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  LOGIN = '[Logging In User]',
  LOGOUT='[Logout]',
  SIGNUP = '[Signing Up User]',
  LOGIN_REST='[LogIn rest call]'
}

export class AuthLogin implements Action {
  readonly type = AuthActionsTypes.LOGIN;
  constructor(public payload: IAuth) {}
}

export class AuthLoginRest implements Action{
  readonly type = AuthActionsTypes.LOGIN_REST;
  constructor(public payload:{mail:string,password:string}){}
}

export class AuthLogout implements Action{
  readonly type=AuthActionsTypes.LOGOUT;
}

export type AuthActions = AuthLogin | AuthLogout;
