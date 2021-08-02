import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  constructor(private loginService: ServicioAutentificacionService, protected router: Router) { }

  ngOnInit(): void {
  }

}
