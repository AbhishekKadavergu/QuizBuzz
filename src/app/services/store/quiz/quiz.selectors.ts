import { QuizState } from './../states';
import { IQuiz } from 'src/app/utils/Models/Quiz';
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';

export const quizSelector = (state: AppState) => state.quiz;

export const quizListSelector = createSelector(
  quizSelector,
  (state: QuizState) => state.quizList
);

export const currentQuizSelector = createSelector(
  quizSelector,
  (state: QuizState) => state.currentEditQuiz
);

export const isEditModeSelector = createSelector(
  quizSelector,
  (state: QuizState) => !state.currentEditQuiz.id
);
