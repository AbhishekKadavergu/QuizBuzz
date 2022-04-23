import { AuthSignUpRest } from './../../services/store/auth/auth.actions';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/services/store/app.store';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm;
  showPassword: boolean = false;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.signUpForm = this.fb.group(
      {
        mail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        isAdmin: [false, [Validators.required]],
      },
      {
        validator: this.ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSignUp() {
    this.store.dispatch(
      AuthSignUpRest({
        mail: this.signUpForm.value.mail,
        password: this.signUpForm.value.password,
        isAdmin: this.signUpForm.value.isAdmin,
      })
    );
  }
}
