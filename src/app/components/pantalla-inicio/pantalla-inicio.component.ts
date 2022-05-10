import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.scss']
})
export class PantallaInicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  comprar() {
    this.router.navigate(["/productos"]);
  }

  pedidos() {
    this.router.navigate(["/pedidos"]);
  }

}
