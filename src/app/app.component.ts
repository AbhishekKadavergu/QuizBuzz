import { ResetToast } from './services/store/ui/ui.actions';
import { IToast } from './utils/Models/Toast';
import { UIState } from './services/store/states';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppState } from './services/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuizzBuzz';
  toastSub!:Subscription;

  constructor(private primengConfig: PrimeNGConfig,private store:Store<AppState>,private msg:MessageService,) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }


    toastHandler(){
      this.toastSub=this.store.select('ui').subscribe((uiState:UIState)=>{

      })
    }

}
