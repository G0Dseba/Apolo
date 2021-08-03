import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Usuario } from 'src/app/objetos/usuario';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  iniciarSesion: Usuario = {};
  msgLoginErroneo: Message[] = [];
  loginErroneo:boolean =false;
  
  constructor(private loginService: ServicioAutentificacionService, protected router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.iniciarSesion= {};
      if (this.loginService.validarUsuario()) {
        this.router.navigate(['/']);
      }
    this.msgLoginErroneo = [{severity:'error', summary:'Usuario Invalido', detail:'Las credenciales ingresadas no son correctas'}];
  }

  loguear(usuario: Usuario){
    this.loginService.inicioSesion(usuario).then((res:any)=>{
      console.log(res);
      if(res){
        this.loginService.guardarUsuario(res);
        this.router.navigate(['/apolo-principal']);
      }else{
        this.loginErroneo=true;
      }
    })
  }
}
