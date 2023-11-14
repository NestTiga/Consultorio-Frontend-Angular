import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosToken } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
// import { DatosToken } from 'src/app/models/login';
// import { LoginService } from 'src/app/services/login.service';
// import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;

  status!: boolean;

  respuestaFallida:string='No se encontró usuario';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.myForm = this.fb.group({  // método que espera un objeto
      correo: ['',[Validators.required]],
      contrasenia: ['',[Validators.required]],
    });
   }

  ngOnInit(): void {
  }


  Login(){
    this.loginService.postLogin(this.myForm.value).subscribe((res:DatosToken) => {
      console.log('se tuvo los datos en login',res);
      this.status=res.estado;
      if(this.status){
        localStorage.setItem('token', res.token);
        localStorage.setItem('correo', this.myForm.value.correo);
        this.router.navigate(['sistema/despachados']);
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
          title:'Los datos del usuario son incorrectos'
        })
      }
      
    },
    (error: HttpErrorResponse) => {
        console.log(error.error.info);
    }
    );
  }

}
