import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../objetos/usuario';
@Injectable({
  providedIn: 'root'
})
export class ServicioAutentificacionService {

  constructor(private http: HttpClient) { }
  private httpOptions: any;

  async inicioSesion(usuario:Usuario){
    const body = JSON.stringify(usuario);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
    };
    
  const response = await this.http.post('http://localhost:8080/autenticar', body, this.httpOptions).toPromise();
  
      
  return response;
  }
  obtenerUsuario(){
    let usuario:any;
    if(sessionStorage.getItem('usuario')){
      usuario= sessionStorage.getItem('usuario');
    }else{
      usuario= '{}';
    }
    return usuario;
    
  }
  cerrarSesion(){
    sessionStorage.removeItem('usuario');
    sessionStorage.clear();
  }
  guardarUsuario(usuario: Usuario){
    sessionStorage.setItem('usuario',JSON.stringify(usuario));
  }
  validarUsuario(){
    let usuario:boolean;
    if(sessionStorage.getItem('usuario')){
      usuario= true;
    }else{
      usuario= false;
    }
    return usuario;
    
  }
}
