import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/objetos/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.scss']
})
export class PaginaHomeComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }
  listaUsuarios:Usuario[]=[];
  displayEditar:any = false;
  usuarioEditar!: Usuario;
  ngOnInit(): void {
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
