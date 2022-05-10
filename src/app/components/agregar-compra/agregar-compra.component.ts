import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { timer } from "rxjs";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  styleUrls: ['./agregar-compra.component.css']
})
export class AgregarCompraComponent implements OnInit {
  @Input() item: any;

  product: any;
  prodAdd: any;
  data: object[] = [];
  timeLeft: number = 60;
  interval: any;
  timerInterval: any;
  addOk = 0;

  constructor(private generalService: GeneralService, private router: Router) {
    // generalService.
    this.product = sessionStorage.getItem("product-select");
    console.log(this.product)
    this.product = JSON.parse(this.product);
  }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
  }
  agregar(pr: any) {
    
    this.prodAdd = sessionStorage.getItem("productAdd");
    if (this.prodAdd == null) {
      sessionStorage.setItem("productAdd", pr.id);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado con exito!',
        showConfirmButton: false,
        timer: 1500
      }).then(a => {
        this.router.navigate(["/productos"]);
      })

    } else {
      let articles = this.prodAdd.split(",");
      articles.forEach((element: any) => {
        if (element == pr.id) {
          this.addOk++;
        }
      });

      if (this.addOk == 0) {
        this.prodAdd = this.prodAdd + ", " + pr.id;
        sessionStorage.setItem("productAdd", this.prodAdd);
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado con exito!',
          showConfirmButton: false,
          timer: 1500
        }).then(a => {
          this.router.navigate(["/productos"]);
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El producto ya fue agregado, intente con otro!',
          showConfirmButton: false,
          timer: 3000
        }).then(a => {
          this.router.navigate(["/productos"]);
        })
      }
    }


  }

  comprar(pr: any) {
    this.prodAdd = sessionStorage.getItem("productAdd");

    if (this.prodAdd == null) {
      sessionStorage.setItem("productAdd", pr.id);
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado con exito!',
        showConfirmButton: false,
        timer: 1500
      }).then(a => {
        this.router.navigate(["/productos"]);
      })

    }
    else {
      let articles = this.prodAdd.split(",");
      articles.forEach((element: any) => {
        if (element == pr.id) {
          this.addOk++;
        }
      });

      if (this.addOk == 0) {
        this.prodAdd = this.prodAdd + ", " + pr.id;
        sessionStorage.setItem("productAdd", this.prodAdd);
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado con exito!',
          showConfirmButton: false,
          timer: 1500
        }).then(a => {
          this.router.navigate(["/resumen"]);
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El producto ya fue agregado!',
          showConfirmButton: false,
          timer: 3000
        }).then(a => {
          this.router.navigate(["/resumen"]);
        })
      }
    }
  }

  cargarCantidad() {
    debugger
    let cod: any;
    cod = document.getElementById("producto");
    if (cod) {
      cod = cod.value;
    }
  }

}
