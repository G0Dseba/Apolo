import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/objetos/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ServicioAutentificacionService } from 'src/app/services/servicio-autentificacion.service';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.scss']
})
export class MostrarProductoComponent implements OnInit {

  constructor(private productoService: ProductoService, private loginService: ServicioAutentificacionService, protected router: Router) { }
  listaProductos:Producto[]=[];
  displayEditar:any = false;
  productoEditar: Producto = {};
  ngOnInit(): void {
    if(!this.loginService.validarUsuario()){
      this.router.navigate(['/']);
     }
    this.listarProductos();
  }

  listarProductos(){
     this.productoService.obtenerProducto().subscribe((res:any)=>{
       console.log(res);
        let retorno:any[] = res;
        this.listaProductos = retorno;
     });
  }
  cargarModalEditarProducto(producto:Producto){
    this.displayEditar = true;
    console.log(producto);
    this.productoEditar = producto;
    console.log(this.productoEditar);

  }
  guardarProducto(producto:Producto){
    this.productoService.editarProducto(producto).subscribe((res:any)=>{
      console.log(res);
    });
  }
}



