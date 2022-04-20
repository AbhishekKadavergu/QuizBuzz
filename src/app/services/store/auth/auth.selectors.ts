import { IUser } from './../../../utils/Models/User';
import { AuthState } from './../states';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';

export const authSelector = (state: AppState) => state.auth;

export const userSelector = createSelector(
  authSelector,
  (state: AuthState) => state.user
);

export const userIdSelector=createSelector(
  userSelector,
  (state:IUser)=>state.id
)

export const isAdminSelector = createSelector(
  userSelector,
  (state: IUser) => state.isAdmin
);

export const isLoggedInSelector = createSelector(
  authSelector,
  (state: AuthState) => state.isLoggedIn
);

export const validUserSelector = createSelector(
  userSelector,
  (state:IUser)=>!!state.id
)
