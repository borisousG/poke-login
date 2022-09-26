import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth : boolean = false;

  constructor() { }

  checkAuth() : void {
    if(!localStorage.getItem('auth')){
      this.auth = false;
      return;
    }
    
    this.auth = (localStorage.getItem('auth')!.toLowerCase() == 'true');
  }

  saveSession(userName : string, password : string) : boolean {
    if(userName == 'postman' && password == 'password') {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('userName', userName);
      localStorage.setItem('password', password);
      return true;
    } else {
      localStorage.setItem('auth', 'false');
      localStorage.removeItem('userName');
      localStorage.removeItem('password');
      return false;
    }
  }

}
