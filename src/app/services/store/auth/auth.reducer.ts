import { AuthLogin, AuthLogout } from './auth.actions';
import { Auth } from './../../../utils/Models/Auth';

import { createReducer, on } from '@ngrx/store';


const initialState = {
  ...new Auth(),
};

export const AuthReducer = createReducer(
  initialState,
  on(AuthLogin,(state,payload)=>{
    return {
      ...payload.auth,

    };
  }),
  on(AuthLogout,(_state)=>{
    return initialState;
  })
)
