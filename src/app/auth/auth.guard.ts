import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/Router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
     
      if(localStorage.getItem("userToken") != null)
      {
        return true;
      }

      //Not logged in so redirect to login page with return url
      this.router.navigate(['/user'], { queryParams: { returnUrl: state.url }});
      return false;
  }
}
