import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoeItemComponent } from './shoes/shoe-item/shoe-item.component';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoeDetailComponent } from './shoes/shoe-detail/shoe-detail.component';
import { ShoeEditComponent } from './shoes/shoe-edit/shoe-edit.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    HeaderComponent,
    ShoeItemComponent,
    AuthComponent,
    CreateComponent,
    ShoeDetailComponent,
    ShoeEditComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
