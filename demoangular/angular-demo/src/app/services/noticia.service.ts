import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Noticia } from '../objetos/noticia';
@Injectable({
  providedIn: 'root'
})

export class NoticiaService {

  constructor(private http: HttpClient) {}
  private httpOptions: any;
  obtenerNoticia() {

    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get("http://localhost:8080/listarn",
      this.httpOptions
    );
  }
  editarNoticia(noticia:Noticia) {
    const body = JSON.stringify(noticia);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.put("http://localhost:8080/actualizarn",
      body,
      this.httpOptions
    );
  }

}