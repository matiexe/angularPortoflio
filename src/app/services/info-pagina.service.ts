import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any = {};
  cargada = false;
  equipo : any[]= [];
  constructor(private http : HttpClient) { 
    console.log('servicio listo');
    this.cargarInfo();
    this.cargarEquipo();
    //leer archivo Json
    
  }
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp =>{
      this.cargada= true;
      this.info = resp;
    })
  }

  private cargarEquipo(){
    this.http.get('https://angular-template-b1d18.firebaseio.com/equipo.json')
    .subscribe((resp:any)=>{
      this.equipo = resp;
      console.log(resp);
    })
    
  }
}
