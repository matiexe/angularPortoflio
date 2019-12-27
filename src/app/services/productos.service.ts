import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos : Producto[];
  cargando = true;
  productosFiltrados :Producto[] = [1,2,3];
  constructor(private http: HttpClient) {
    this.cargarProductos();
   }
   private cargarProductos(){
     return new Promise((resolve,reject)=>{
      this.http.get('https://angular-template-b1d18.firebaseio.com/productos_idx.json')
      .subscribe((resp:Producto[])=>{
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
     })
     
     });
   }
   getProductos(id : string){
     return this.http.get(`https://angular-template-b1d18.firebaseio.com/productos/${id}.json`)

   }
   buscarProductos(termino:string){
     if(this.productos.length ===0){
       //cargar productos
       this.cargarProductos().then(()=>{
         //ejecutar filtro 
         this.filtrarProductos(termino);
       });
     }else{
       //aplicar filtro
       this.filtrarProductos(termino);
     }

   }

   private filtrarProductos(termino:string){
     console.log(this.productos);
     this.productosFiltrados = [];
     termino = termino.toLowerCase();
     this.productos.forEach(prod =>{
       const tituloLower = prod.titulo.toLowerCase();
       if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
         this.productosFiltrados.push(prod);
       }
     });
   }
}
