import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { ShoeService } from '../shoes/shoe.service';

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


  constructor(private authService: AuthService, private shoeService: ShoeService, private router: Router){}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthanticated = !!user;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  onSearch(input: any){
    this.shoeService.searchShoe((input.value));
    this.router.navigate(['/shoes']);
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
