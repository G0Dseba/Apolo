import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Producto } from '../objetos/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }
  private httpOptions: any;
  obtenerProducto() {

    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get("http://localhost:8080/listarp",
      this.httpOptions
    );
  }


  editarProducto(producto:Producto) {
    const body = JSON.stringify(producto);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.put("http://localhost:8080/actualizarp",
      body,
      this.httpOptions
    );
  }
  agregarProducto(producto:Producto){
    const body = JSON.stringify(producto);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
    };
    return this.http.post("http://localhost:8080/insertarp",
      body,
      this.httpOptions 
    );
  }
}
