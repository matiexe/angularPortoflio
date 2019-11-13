import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any = {};
  cargada = false;
  constructor(private http : HttpClient) { 
    console.log('servicio listo');

    //leer archivo Json
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp =>{
      this.cargada= true;
      this.info = resp;
    })
  }
}
