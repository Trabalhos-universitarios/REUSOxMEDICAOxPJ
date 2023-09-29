import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EVIRENMONTS } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL = EVIRENMONTS.apiURL;

  constructor(private http: HttpClient) { }

  getUser(userData?: any) {
    console.log('DADOS USER: ', userData);

    return this.http.post(`${this.URL}/login/`, userData);
  }


}
