import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from 'config/config';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { DataFormTurno } from '../models/turnos';


const initAlumno: DataFormTurno = {
  formulario: '',
  title:'',
  data: {
    id:           0,
    nombre:       '',
    apellido:     '',
    cedula:       '',
    especialidad: '',
    sintomas:     '',
    observacion:  '',
    comentario:   '',
    receta:       '',
    archivo:      '',
    estado:       '',
    fechaCreacion: new Date(),
  },
};

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  //Behaviors Subjects
  private formTurno$ = new BehaviorSubject<DataFormTurno>(initAlumno);
  constructor() {}

  // Alumnos

  // Obtener los valores del observable para los datos de los alumnos
  get selectFromTurno$(): Observable<DataFormTurno> {
    return this.formTurno$.asObservable();
  }

  // Guardar los valores del observable para los datos de los alumnos
  setTurno(data: DataFormTurno) {
    this.formTurno$.next(data);
  }

  //Funciones Modal

  openModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;
    if (modalGeneral) {
      modalGeneral.style.display = 'block';
      modalGeneral.classList.add('show');
      modalGeneral.style.backgroundColor = 'rgba(0,0,0,0.5)';
      setTimeout(() => {
        if (modalGeneral) {
          modalGeneral.style.opacity = 1;
        }
      }); //FOR TRANSITION
    }
  }

  closeModal() {
    let modalGeneral = document.getElementById('modalGeneral') as any;

    if (modalGeneral) {
      modalGeneral.style.display = 'none';
      modalGeneral.classList.remove('show');
      modalGeneral.style.opacity = 1;
    }
  }
}