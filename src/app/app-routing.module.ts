import { QuizListComponent } from './pages/quiz-list/quiz-list.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './widgets/signup/signup.component';
import { LoginComponent } from './widgets/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"/welcome/login" , pathMatch:"full"},
  {path:"welcome",component:WelcomeComponent , children:[
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent}
  ]},
  {path:'home',component:HomeComponent , /*canActivate:[AuthGuard]*/ children:[
    {path:'quizlist',component:QuizListComponent}
  ]},
  { path: '**', pathMatch: 'full',component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
