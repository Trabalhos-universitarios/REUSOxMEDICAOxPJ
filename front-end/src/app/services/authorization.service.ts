import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private static authorization = true;

  constructor() {}


  authorize(){
    AuthorizationService.authorization = true;
  }

  logOut(){
    AuthorizationService.authorization = false;
  }

  static getLoginStatus(){
      return AuthorizationService.authorization;
  }

}
