import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrunosModel } from 'src/app/models/turnos';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-consulta',
  templateUrl: './mostrar-consulta.component.html',
  styleUrls: ['./mostrar-consulta.component.css']
})
export class MostrarConsultaComponent implements OnInit {

  myForm!: FormGroup;

  status!: boolean;
  ultimo!: number;
  txtArchivo!:any;
  txtBotonG: boolean=true;
  txtNombreArchivo='';
  
  datosTurno!:TrunosModel
  constructor(
    private turnosService: TurnosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.turnosService.getTurnos().subscribe(
      (res: any) => {
        console.log('datos que llegan del back =>', res);
        console.log('tamaño de array para el último turno=>', res.length);
        this.ultimo= res.length - 1;
        console.log('número del último turno=>', this.ultimo);
        this.datosTurno = res[this.ultimo];
        this.llenarCampo(res[this.ultimo]);
      }
    );
  }

  llenarCampo(datos:TrunosModel){
    this.myForm = this.fb.group({
      id:[datos.id],
      nombre: [datos.nombre],
      apellido: [datos.apellido],
      cedula: [datos.cedula],
      especialidad: [datos.especialidad],
      sintomas: [datos.sintomas],
      estado: ['Despachado'],
      observacion: [datos.observacion],
      comentario: ['', Validators.required],
      receta: ['', Validators.required],
      archivo: ['', Validators.required],
    });
  }

  CapturarArchivo(event:any):void {
    const MAXIMO_TAMANIO_BYTES = 5000000
    const reader = new FileReader();
    if (event.target.files.length > 0) {
      if(event.target.files[0].size>MAXIMO_TAMANIO_BYTES){
        this.txtBotonG=true;
        console.log("El tamaño de archivo permitido es de "+MAXIMO_TAMANIO_BYTES/1000000+"MB");
   
      }else if(event.target.files[0].type=="application/pdf"){
        this.txtArchivo = event.target.files[0];
        console.log('Datos del archivo subido', this.txtArchivo);
        this.txtNombreArchivo=this.txtArchivo.name;
        this.txtBotonG=false;
      }else{
        this.txtBotonG=true;
          console.log("El tipo de archivo permitido es PDF");
      }
    }else{

    }
  }

  addConsulta() {
    Swal.fire({
      title: 'Esta seguro que desea despachar este turno?',
      showDenyButton: true,
      confirmButtonText: 'Despachar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('datos que se envian al back =>', this.myForm.value);
        this.turnosService.putTurnos(this.myForm.value).subscribe((res) => {
          if(res==true){
            Swal.fire({
              title: 'Turno despachado',
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
              title:'No se puede despachar al turno'
            })
          }
            
        });
      } else if (result.isDenied) {
        Swal.fire('No se despachó al turno!', '', 'info');
      }
    });
  }

}
