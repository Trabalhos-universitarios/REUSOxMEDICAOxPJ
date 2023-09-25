import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UnfinishedPagesComponent } from './pages/unfinished-pages/unfinished-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UnfinishedPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
