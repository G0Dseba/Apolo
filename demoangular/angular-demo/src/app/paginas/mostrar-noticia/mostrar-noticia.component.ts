import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/objetos/noticia';
import { Usuario } from 'src/app/objetos/usuario';
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
  guardarNoticia(noticia: Noticia) {
    let usuario: Usuario = JSON.parse(this.loginService.obtenerUsuario());
    noticia.autor = usuario.nombre;
    noticia.fecha = new Date();
    this.noticiaService.editarNoticia(noticia).subscribe((res: any) => {
      console.log(res);


    });
    this.noticiaEditar = {};
  }

  myUploader(event: any) {
    console.log(event.files);
    this.noticiaEditar.tipo = event.files[0].type;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.files[0]);
    fileReader.onload = () => {
      // Will print the base64 here.
      console.log(fileReader.result);
      //this.agregarNoticia.imagen = new Blob([fileReader.result!=null?fileReader.result:new Blob]);
      this.noticiaEditar.imagen = (fileReader.result as string).split('base64,')[1];
    };
  }
}
