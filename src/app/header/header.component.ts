import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  faMagnifyingGlass = faMagnifyingGlass;
  faCartShopping = faCartShopping;
  private userSub!: Subscription;
  isAuthanticated = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthanticated = !!user;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
