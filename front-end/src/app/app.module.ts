import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ComponentsComponent } from './components/components.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CardiologiaComponent } from './components/home-page/cardiologia/cardiologia.component';
import { OftalmologiaComponent } from './components/home-page/oftalmologia/oftalmologia.component';
import { OrtopediaComponent } from './components/home-page/ortopedia/ortopedia.component';
import { UserPageComponent } from './components/home-page/user-page/user-page.component';
import { UnfinishedPagesComponent } from './components/home-page/unfinished-pages/unfinished-pages.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CardiologiaComponent,
    OftalmologiaComponent,
    OrtopediaComponent,
    UserPageComponent,
    UnfinishedPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
