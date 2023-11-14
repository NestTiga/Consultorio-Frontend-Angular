import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrunosModel } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-mostrar-turnos-despachados',
  templateUrl: './mostrar-turnos-despachados.component.html',
  styleUrls: ['./mostrar-turnos-despachados.component.css']
})
export class MostrarTurnosDespachadosComponent implements OnInit {

  turnosD!: TrunosModel[];
  
  constructor(
    public turnosService: TurnosService
  ) { }

  ngOnInit(): void {
    this.getTurnosDespachados();
  }

  getTurnosDespachados() {
    this.turnosService.getTurnosDespachados().subscribe(
      (res: any) => {
        console.log('datos que llegan del back en despachados =>', res);
        this.turnosD = res;
      },
      (error: HttpErrorResponse) => {
        
        console.log(error);
      }
    );
  }

}
