import { Auth, IAuth } from './../../../utils/Models/Auth';
import { AuthActionsTypes, AuthActions } from './auth.actions';
import { Action } from '@ngrx/store';

const initialState = {
  ...new Auth(),
};

export function AuthReducer(
  state: IAuth = initialState,
  action: Action
): IAuth {
  const authAction = action as AuthActions;
  switch (authAction.type) {
    case AuthActionsTypes.LOGIN:
      return {
        ...state
      };
  }
}
