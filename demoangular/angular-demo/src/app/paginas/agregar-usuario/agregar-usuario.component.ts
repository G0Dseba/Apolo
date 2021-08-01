import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/objetos/usuario';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent implements OnInit {
  agregarUsuario: Usuario = {};
  constructor(private usuarioService: UsuarioService, private loginService: ServicioAutentificacionService, protected router: Router) {}
  
  registrar(usuario: Usuario) {
    this.usuarioService.agregarUsuario(usuario).subscribe((res:any)=>{
      console.log(res);
      
      
    });
    this.agregarUsuario= {};
  }
  ngOnInit(): void {
    if(!this.loginService.validarUsuario()){
      this.router.navigate(['/']);
     }
    this.agregarUsuario= {};
  }
  

}

