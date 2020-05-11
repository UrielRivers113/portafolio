import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  // Filtro para recibir el parametro por el URL
  // Para recibir el argumento ocupo el activatedroute
  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(){
    this.route.params
    .subscribe(params=>{
      // Esta palabra termino es la que está en el app.routes
      console.log(params['termino']);
      this.productosService.buscarProducto(params['termino'])
    });
  }

}
