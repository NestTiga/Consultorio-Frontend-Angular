import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { DatosLogin, DatosToken } from '../models/login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_API: string = config.URL_BASE + '/api/login';

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) {}

  postLogin(DatosUsuario: DatosLogin) {
    return this.http.post<DatosToken>(this.URL_API, DatosUsuario);
  }

  isAuth():boolean{
    
    const token= localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }


}
