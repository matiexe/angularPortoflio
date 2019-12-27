import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import {descripcionProducto} from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-prodcut',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  producto : descripcionProducto;
  id : string;
  constructor(private route: ActivatedRoute , public obtenerProductos:ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros =>{
      console.log(parametros['id']);
      this.obtenerProductos.getProductos(parametros['id'])
      .subscribe((producto : descripcionProducto)=>{
        this.id = parametros['id'];
        this.producto = producto;
        console.log(producto);
      }

      )
    });
  }

}
