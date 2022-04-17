import { Loading } from './../store/ui/ui.actions';
import { AuthActions, AuthLogout } from './../store/auth/auth.actions';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IResponse } from 'src/app/utils/Models/Response';
import { AppState } from '../store/app.store';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private msg: MessageService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true,
    });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => this.handleSuccessfulResponse(event)),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = error.message;
        if (error.status == 401) {
          sessionStorage.clear();
          this.store.dispatch(new AuthLogout())
          errorMsg = error.error.detail;
          this.router.navigateByUrl('/login');
        }
        return throwError(() => errorMsg);
      }),
      finalize(this.handleRequestCompleted.bind(this))
    );
  }

  private handleRequestCompleted(): void {
    this.store.dispatch(new Loading(false));
  }

  private handleSuccessfulResponse(event: HttpEvent<any>): HttpEvent<any> {
    if (event instanceof HttpResponse) {
      event = event.clone({ body: event.body.response });
      const response: IResponse = event.body;
      if (!response.status) {
        if (response.data) {
          this.msg.add({
            severity: response.severity,
            detail: '',
            summary: response.summary,
            key: 'multipleError',
            sticky: true,
            data: response.data,
          });
        } else {
          this.msg.add({
            severity: response.severity,
            detail: response.detail,
            summary: response.summary,
            key: 'global',
            sticky: true,
          });
        }
      }
    }
    if (event.type == 0) {
      this.store.dispatch(new Loading(true));
    }
    return event;
  }
}
