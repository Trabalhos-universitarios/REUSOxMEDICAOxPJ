import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EVIRENMONTS } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly URL = EVIRENMONTS.apiURL;

  constructor(private http: HttpClient) { }

  setUser(userData?: any) {
    console.log('DADOS USER REGISTER: ', userData);

    return this.http.post(`${this.URL}/register/`, userData);
  }
}
