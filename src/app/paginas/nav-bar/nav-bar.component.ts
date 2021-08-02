import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/objetos/usuario';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public loginService: ServicioAutentificacionService, protected router: Router) { }
  usuariologin: Usuario = {};
  ngOnInit(): void {
    
    this.usuariologin=JSON.parse(this.loginService.obtenerUsuario());
    console.log(this.usuariologin);
  }
  cerrarSesion(){
    console.log('cerrarSesion');
    this.loginService.cerrarSesion();
    this.router.navigate(['/']);
    
  }
}
