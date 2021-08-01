import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../objetos/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  private httpOptions: any;
  obtenerUsuarios() {

    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get("http://localhost:8080/listar",
      this.httpOptions
    );
  }


  editarUsuario(usuario:Usuario) {
    const body = JSON.stringify(usuario);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.put("http://localhost:8080/actualizar",
      body,
      this.httpOptions
    );
  }
}
