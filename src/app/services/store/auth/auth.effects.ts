import { AuthActionsTypes, AuthLoginRest } from './auth.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  authLogin = this.actions$.pipe(
    ofType(AuthActionsTypes.LOGIN_REST),
    switchMap((authData: AuthLoginRest) => {
      return this.http
        .post('http://localhost:3000/login', authData.payload)
        .pipe(map((authRes) => {}));
    })
  );
}
