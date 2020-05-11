import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
              // Para hacer navegación interna de los componentes  
              private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto(termino: string){
    // Quiero que funcione si escribió al menos una letra
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
