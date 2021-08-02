import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/objetos/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-mostrar-noticia',
  templateUrl: './mostrar-noticia.component.html',
  styleUrls: ['./mostrar-noticia.component.scss']
})
export class MostrarNoticiaComponent implements OnInit {

  constructor(private noticiaService: NoticiaService, private loginService: ServicioAutentificacionService, protected router: Router) { }
  listaNoticias:Noticia[]=[];
  displayEditar:any = false;
  noticiaEditar: Noticia = {};
  ngOnInit(): void {
    if(!this.loginService.validarUsuario()){
      this.router.navigate(['/']);
     }
    this.listarNoticias();
  }

  listarNoticias(){
     this.noticiaService.obtenerNoticia().subscribe((res:any)=>{
       console.log(res);
        let retorno:any[] = res;
        this.listaNoticias = retorno;
     });
  }
  cargarModalEditarNoticia(noticia:Noticia){
    this.displayEditar = true;
    console.log(noticia);
    this.noticiaEditar = noticia;
    console.log(this.noticiaEditar);

  }
  guardarNoticia(noticia:Noticia){
    this.noticiaService.editarNoticia(noticia).subscribe((res:any)=>{
      console.log(res);
    });
  }
}
