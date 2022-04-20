import { QuizEffects } from './services/store/quiz/quiz.effects';
import { UIEffects } from './services/store/ui/ui.effects';
import { AuthEffects } from './services/store/auth/auth.effects';
import { AppReducer } from './services/store/app.store';
import { SignupComponent } from './pages/signup/signup.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

//Primeng imports
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';

import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './widgets/nav-bar/nav-bar.component';
import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CreateQuizComponent } from './pages/create-quiz/create-quiz.component';
import { StoreModule } from '@ngrx/store';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MyErrorHandler } from './services/util/ErrorHandler';
import { HttpErrorInterceptor } from './services/util/http-interceptors';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SignupComponent,
    HomeComponent,
    NavBarComponent,
    QuizListComponent,
    QuizComponent,
    CreateQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    RadioButtonModule,
    TableModule,
    PanelModule,
    InputNumberModule,
    CalendarModule,
    EditorModule,
    DropdownModule,
    FieldsetModule,
    ToggleButtonModule,
    ToastModule,
    TagModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([AuthEffects,UIEffects,QuizEffects]),
  ],
  providers: [
    ConfirmationService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
    },
    MessageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
