import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApoloService {

  constructor(private http: HttpClient) { }
  private httpOptions: any;
  obtenerNoticia() {

    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get("http://localhost:8080/listarn",
      this.httpOptions
    );
  }

  obtenerProducto() {

    this.httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http.get("http://localhost:8080/listarp",
      this.httpOptions
    );
  }

}
