import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TrunosModel } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-mostrar-turnos',
  templateUrl: './mostrar-turnos.component.html',
  styleUrls: ['./mostrar-turnos.component.css']
})
export class MostrarTurnosComponent implements OnInit {

  turnos!: TrunosModel[];

  constructor(
    public turnosService: TurnosService
  ) { }

  ngOnInit(): void {
    this.getTurnos();
  }

  getTurnos() {
    this.turnosService.getTurnos().subscribe(
      (res: any) => {
        console.log('datos que llegan del back =>', res);
        this.turnos = res;
      },
      (error: HttpErrorResponse) => {
        
        console.log(error);
      }
    );
  }

 


}
