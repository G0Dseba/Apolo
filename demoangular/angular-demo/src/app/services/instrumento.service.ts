import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instrumento } from '../objetos/instrumento';
@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  constructor(private http: HttpClient) { }
  private httpOptions: any;

  agregarInstrumento(instrumento: Instrumento){
    const body = JSON.stringify(instrumento);
    console.log(body);
    this.httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"}),
    };
    return this.http.post("http://localhost:8080/insertari",
      body,
      this.httpOptions 
    );
  }
}
