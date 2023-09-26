import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from 'src/app/components/home-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CardiologiaComponent } from './components/home-page/cardiologia/cardiologia.component';
import { OftalmologiaComponent } from './components/home-page/oftalmologia/oftalmologia.component';
import { OrtopediaComponent } from './components/home-page/ortopedia/ortopedia.component';
import { UnfinishedPagesComponent } from './components/home-page/unfinished-pages/unfinished-pages.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
    ]
  },
  { path: 'register', component: RegisterPageComponent },
  { path: 'user-page', component: UserPageComponent },
  {path: 'cardiologia', component: CardiologiaComponent},
  {path: 'oftalmologia', component: OftalmologiaComponent},
  {path: 'ortopedia', component: OrtopediaComponent},
  {path: 'nao-encontrado', component: UnfinishedPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
