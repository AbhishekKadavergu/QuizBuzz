import { DataStoreService } from './../../services/store/data-store.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { User } from 'src/app/utils/Models/User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService,private router:Router,private store:DataStoreService) {}

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
            this.store.setUser(new User());
            this.router.navigateByUrl("/")
        },
    });
}

}
