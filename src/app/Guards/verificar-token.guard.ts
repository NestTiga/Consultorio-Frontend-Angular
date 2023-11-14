import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class VerificarTokenGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }
  canActivate() {
    if(!this.loginService.isAuth()){
      console.log('El token no es válido o ya expiró');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
