import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPaginaService:InfoPaginaService, private router :Router ) { }

  ngOnInit() {
  }
  buscarProductos(termino:String  ){
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
    console.log(termino)
  }
}
