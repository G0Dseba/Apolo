import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/objetos/noticia';
import { Usuario } from 'src/app/objetos/usuario';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.scss']
})
export class AgregarNoticiaComponent implements OnInit {
  agregarNoticia: Noticia = {};


  constructor(private noticiaService: NoticiaService, private loginService: ServicioAutentificacionService, protected router: Router) { }


  registrar(noticia: Noticia) {
    let usuario: Usuario = JSON.parse(this.loginService.obtenerUsuario());
    noticia.autor = usuario.nombre;
    noticia.fecha = new Date();
    this.noticiaService.agregarNoticia(noticia).subscribe((res: any) => {
      console.log(res);


    });
    this.agregarNoticia = {};
  }
  ngOnInit(): void {
    if (!this.loginService.validarUsuario()) {
      this.router.navigate(['/']);
    }
    this.agregarNoticia = {};
  }

  myUploader(event: any) {
    console.log(event.files);
    this.agregarNoticia.tipo = event.files[0].type;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.files[0]);
    fileReader.onload = () => {
      // Will print the base64 here.
      console.log(fileReader.result);
      //this.agregarNoticia.imagen = new Blob([fileReader.result!=null?fileReader.result:new Blob]);
      this.agregarNoticia.imagen = (fileReader.result as string).split('base64,')[1];
    };
  }

}
