import { Action } from "@ngrx/store";



export enum UIActionsTypes{
  LOADING="[loading state]"
}

export class Loading implements Action{
  readonly type = UIActionsTypes.LOADING;
  constructor(public payload:boolean){}
}

export type UIActions = Loading;
