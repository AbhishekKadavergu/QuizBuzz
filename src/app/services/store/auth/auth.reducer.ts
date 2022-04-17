import { Auth, IAuth } from './../../../utils/Models/Auth';
import { AuthActionsTypes, AuthActions } from './auth.actions';
import { Action } from '@ngrx/store';
import { User } from 'src/app/utils/Models/User';

const initialState = {
  ...new Auth(),
};

export function AuthReducer(
  state: IAuth = initialState,
  action: Action
) {
  const authAction = action as AuthActions;
  switch (authAction.type) {
    case AuthActionsTypes.LOGIN:
      return {
        ...authAction.payload
      }
    case AuthActionsTypes.LOGOUT:
      return {
        ...state,
        user:new User()
      }
    default:
      return state;
  }
}
