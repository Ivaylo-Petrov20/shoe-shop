import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoeItemComponent } from './shoes/shoe-item/shoe-item.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoeDetailComponent } from './shoes/shoe-detail/shoe-detail.component';
import { ShoeEditComponent } from './shoes/shoe-edit/shoe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    HeaderComponent,
    ShoeItemComponent,
    AuthComponent,
    CreateComponent,
    ShoeDetailComponent,
    ShoeEditComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
