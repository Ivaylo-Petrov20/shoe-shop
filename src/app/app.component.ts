import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private dataStorageService: DataStorageService, private authService: AuthService){}

  ngOnInit(){
    this.authService.autoLogin();
    this.onFetchData();
  }

  onFetchData(){
    this.dataStorageService.fetchShoes().subscribe();
  }
}
