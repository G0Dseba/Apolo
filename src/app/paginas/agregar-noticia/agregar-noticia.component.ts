import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/objetos/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.scss']
})
export class AgregarNoticiaComponent implements OnInit {
  agregarNoticia: Noticia = {};
  
  constructor(private noticiaService: NoticiaService, private loginService: ServicioAutentificacionService, protected router: Router){}
     
  registrarn(noticia: Noticia){
    this.noticiaService.agregarNoticia(noticia).subscribe((res:any) =>{
      console.log(res);
    });
    this.agregarNoticia= {};
  }
     
  ngOnInit(): void {
    // if(!this.loginService.validarUsuario()){
    //   this.router.navigate(['/']);
    //  }
  }

}
