import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/objetos/noticia';
import { Producto } from 'src/app/objetos/producto';
import { ApoloService } from 'src/app/services/apolo.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-apolo-principal',
  templateUrl: './apolo-principal.component.html',
  styleUrls: ['./apolo-principal.component.scss']
})
export class ApoloPrincipalComponent implements OnInit {

  constructor(private apoloService:ApoloService, private loginService: ServicioAutentificacionService, protected router: Router) { }
  listaNoticias:Noticia[]=[];
  listaProductos:Producto[]=[];
  ngOnInit(): void {
    if(!this.loginService.validarUsuario()){
      this.router.navigate(['/']);
     }
    this.listarNoticias();
    this.listarProductos();
  }

  listarNoticias(){
     this.apoloService.obtenerNoticia().subscribe((res:any)=>{
       console.log(res);
        let retorno:any[] = res;
        this.listaNoticias = retorno;
     });
  }
  
  listarProductos(){
     this.apoloService.obtenerProducto().subscribe((res:any)=>{
       console.log(res);
        let retorno:any[] = res;
        this.listaProductos = retorno;
     });
  }

}
