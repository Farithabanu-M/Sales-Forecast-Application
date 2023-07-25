import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from './guard.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor( private auth:GuardService, private router: Router){}
  canActivate(){
    if(this.auth.IsLoggedIn()){
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
  
}
