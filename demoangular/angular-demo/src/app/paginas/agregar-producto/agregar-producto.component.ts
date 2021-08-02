import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/objetos/producto';
import { Usuario } from 'src/app/objetos/usuario';
import { ProductoService } from 'src/app/services/producto.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  agregarProducto: Producto = {};


  constructor(private productoService: ProductoService, private loginService: ServicioAutentificacionService, protected router: Router) { }


  registrar(producto: Producto) {
    let usuario: Usuario = JSON.parse(this.loginService.obtenerUsuario());
    producto.vendedor = usuario.nombre;
    this.productoService.agregarProducto(producto).subscribe((res: any) => {
      console.log(res);


    });
    this.agregarProducto = {};
  }
  ngOnInit(): void {
    if (!this.loginService.validarUsuario()) {
      this.router.navigate(['/']);
    }
    this.agregarProducto = {};
  }

  myUploader(event: any) {
    console.log(event.files);
    this.agregarProducto.tipo = event.files[0].type;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.files[0]);
    fileReader.onload = () => {
      // Will print the base64 here.
      console.log(fileReader.result);
      //this.agregarNoticia.imagen = new Blob([fileReader.result!=null?fileReader.result:new Blob]);
      this.agregarProducto.imagen = (fileReader.result as string).split('base64,')[1];
    };
  }
}

