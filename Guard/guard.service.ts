import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { /* TODO document why this constructor is empty */ }
  IsLoggedIn(){
    return localStorage.getItem('token');
  }
}
