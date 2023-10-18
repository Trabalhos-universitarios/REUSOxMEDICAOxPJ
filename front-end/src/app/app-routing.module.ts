import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from 'src/app/components/home-page/user-page/user-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { CardiologiaComponent } from './components/home-page/cardiologia/cardiologia.component';
import { OftalmologiaComponent } from './components/home-page/oftalmologia/oftalmologia.component';
import { OrtopediaComponent } from './components/home-page/ortopedia/ortopedia.component';
import { UnfinishedPagesComponent } from './components/home-page/unfinished-pages/unfinished-pages.component';
import { authorizationGuard } from './_guard/authorization.guard';
import { CatarataComponent } from './components/home-page/oftalmologia/catarata/catarata.component';

const routes: Routes = [
  {
    path: '', component: LoginPageComponent,
    children: [
      {path: 'login', component: LoginPageComponent },
    ]
  },
  {path: 'register', component: RegisterPageComponent },
  {path: 'user-page', component: UserPageComponent, canActivate: [authorizationGuard]},
  {path: 'cardiologia', component: CardiologiaComponent, canActivate: [authorizationGuard]},
  {path: 'oftalmologia', component: OftalmologiaComponent, canActivate: [authorizationGuard]},
  {path: 'oftalmologia/catarata', component: CatarataComponent, canActivate: [authorizationGuard]},
  {path: 'ortopedia', component: OrtopediaComponent, canActivate: [authorizationGuard]},
  {path: 'nao-encontrado', component: UnfinishedPagesComponent, canActivate: [authorizationGuard]},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
