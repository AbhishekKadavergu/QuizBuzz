import { quizReducer } from './quiz/quiz.reducer';
import { UIReducer } from './ui/ui.reducer';
import { AuthState, UIState, QuizState } from './states';
import { ActionReducerMap } from '@ngrx/store';
import { AuthReducer } from './auth/auth.reducer';

export interface AppState {
  auth: AuthState;
  ui: UIState;
  quiz: QuizState;
}

export const AppReducer: ActionReducerMap<AppState> = {
  auth: AuthReducer,
  ui: UIReducer,
  quiz: quizReducer,
};
