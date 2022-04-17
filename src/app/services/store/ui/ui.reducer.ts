import { UIActions, UIActionsTypes } from './ui.actions';
import { Action } from '@ngrx/store';

const initialState = {
  loading: false,
};

export function UIReducer(state = initialState, action: Action) {
  const uiActions = action as UIActions;
  switch(uiActions.type){
    case UIActionsTypes.LOADING:
      return {
        ...state,
        loading:uiActions.payload
      }
    default:
      return state;
  }
}
