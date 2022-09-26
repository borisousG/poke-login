import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(public authService : AuthService){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.checkAuth();
      
      const ACCESS :boolean = this.authService.auth;
      console.log('canActivate | auth access is: ', ACCESS);
      return ACCESS;
  }

  // Solo sirve para cargar el modulo, si ya se cargo previamente no entra
  canLoad(
    route: Route,
    segments: UrlSegment[]
    ): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.checkAuth();

      const ACCESS :boolean = this.authService.auth;
      console.log('canLoad | auth access is: ', ACCESS);
      return ACCESS;
  }
}
