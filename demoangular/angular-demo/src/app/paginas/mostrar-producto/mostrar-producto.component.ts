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
  myUploader(event: any) {
    console.log(event.files);
    this.productoEditar.tipo = event.files[0].type;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(event.files[0]);
    fileReader.onload = () => {
      // Will print the base64 here.
      console.log(fileReader.result);
      //this.agregarNoticia.imagen = new Blob([fileReader.result!=null?fileReader.result:new Blob]);
      this.productoEditar.imagen = (fileReader.result as string).split('base64,')[1];
    };
  }
}



