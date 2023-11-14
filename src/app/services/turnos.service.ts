import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from 'config/config';
import { TrunosModel, nuevoTurno } from '../models/turnos';

@Injectable({
    providedIn: 'root'
})
export class TurnosService {
    private URL_API: string = config.URL_BASE + '/api/turnos';
    private URL_PENDIENTES= this.URL_API + '/pendientes';
    private URL_DESPACHADOS= this.URL_API + '/despachados';

  constructor(private http: HttpClient) {}

  getTurnos() {
    return this.http.get<TrunosModel>(this.URL_PENDIENTES);
  }

  getTurnosDespachados() {
    return this.http.get<TrunosModel>(this.URL_DESPACHADOS);
  }


  postTurnos(TurnoDatos: nuevoTurno) {
    return this.http.post<boolean>(this.URL_API, TurnoDatos);
  }

  putTurnos(datosTurno: any) {
    return this.http.put<any>(
      this.URL_API,
      datosTurno
    );
  }

}
