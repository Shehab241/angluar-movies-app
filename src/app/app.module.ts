import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import  {HttpClientModule}  from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule}from '@angular/forms';
import { TvdetailComponent } from './tvdetail/tvdetail.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviedetailComponent,
    HomeComponent,
    TvComponent,
    RegisterComponent,
    LoginComponent,
    TvdetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
