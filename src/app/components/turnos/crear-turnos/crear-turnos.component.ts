import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-turnos',
  templateUrl: './crear-turnos.component.html',
  styleUrls: ['./crear-turnos.component.css']
})
export class CrearTurnosComponent implements OnInit {

  myForm!: FormGroup;

  status!: boolean;
  
  constructor(
    public turnosService: TurnosService,
    private fb: FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(25)]],
      apellido: ['', [Validators.required, Validators.maxLength(25)]],
      cedula: ['', [Validators.required, Validators.maxLength(10)]],
      especialidad: ['', [ Validators.maxLength(50)]],
      sintomas: ['', [ Validators.maxLength(255)]],
      estado: ['Pendiente'],
      observacion: ['', [Validators.required, Validators.maxLength(255)]],
      comentario: [''],
      receta: [''],
      archivo: ['']
    });
  }

  ngOnInit(): void {
  }

  addTurno() {
    Swal.fire({
      title: 'Esta seguro que desea agregar el nuevo turno?',
      showDenyButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('datos que se envian al back =>', this.myForm.value);
        this.turnosService.postTurnos(this.myForm.value).subscribe((res) => {
          if(res==true){
            Swal.fire({
              title: 'Turno agregado correctamente',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500,
            });
            this.myForm.reset();
            window.location.reload();
          }else{
            const Toast = Swal.mixin({  //Generar una alerta en la parte superior de la pantalla
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })
            
            Toast.fire({   //Datos que llevará la alerta en la parte superior de la pantalla
              icon: 'error',
              title:'No se puede agregar el nuevo turno'
            })
          }
            
        });
      } else if (result.isDenied) {
        Swal.fire('No se agrego al nuevo turno!', '', 'info');
      }
    });
  }

}
