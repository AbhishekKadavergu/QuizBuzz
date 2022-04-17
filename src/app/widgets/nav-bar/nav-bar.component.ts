import { AuthLogout } from './../../services/store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AppState } from 'src/app/services/store/app.store';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private router:Router,private store:Store<AppState>) {}

  ngOnInit(): void {
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target?event.target:undefined,
        message: 'Are you sure that you want to logout?',
        icon: 'pi pi-exclamation-triangle',
        key:'logout',
        accept: () => {
            //confirm action
            this.store.dispatch(new AuthLogout());
            this.router.navigateByUrl("/")
        },
    });
}

}
