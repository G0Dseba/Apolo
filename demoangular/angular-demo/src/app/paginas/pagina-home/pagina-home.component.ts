import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/objetos/usuario';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.scss']
})
export class PaginaHomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private loginService: ServicioAutentificacionService, protected router: Router) { }
  listaUsuarios:Usuario[]=[];
  displayEditar:any = false;
  usuarioEditar: Usuario = {};
  ngOnInit(): void {
    if(!this.loginService.validarUsuario()){
      this.router.navigate(['/']);
     }
    this.listarUsuarios();
  }

  listarUsuarios(){
     this.usuarioService.obtenerUsuarios().subscribe((res:any)=>{
       console.log(res);
        let retorno:any[] = res;
        this.listaUsuarios = retorno;
     });
  }

  cargarModalEditarUsuario(usuario:Usuario){
    this.displayEditar = true;
    console.log(usuario);
    this.usuarioEditar = usuario;
    console.log(this.usuarioEditar);

  }
  guardarUsuario(usuario:Usuario){
    this.usuarioService.editarUsuario(usuario).subscribe((res:any)=>{
      console.log(res);
    });
  }
}