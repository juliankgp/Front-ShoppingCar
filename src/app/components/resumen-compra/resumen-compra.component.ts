import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resumen-compra',
  templateUrl: './resumen-compra.component.html',
  styleUrls: ['./resumen-compra.component.css']
})
export class ResumenCompraComponent implements OnInit {
  a: any;
  data: object[] = [];
  dataToSend: object[] = [];
  dataAny: any;
  subtotal: any;
  impuestos: any;
  total: any;
  empty: boolean = true;
  constructor(public gralService: GeneralService, private router: Router) {
    this.a = sessionStorage.getItem("productAdd");
    if (this.a) {

      let c = this.a!.split(",");
      gralService.getItems().subscribe((data: any) => {
        if (data.length > 0) {
          data.forEach((d: any) => {
            c.forEach((element: any) => {
              if (d.id == element) {
                this.data.push(d)
                this.dataAny = this.data;
                let product1 = {
                  idProducto: d.id,
                  Cantidad: d.cantidad,
                  Nombre: d.nombre,
                  Descripcion: "",
                  Precio: `${d.precio}`
                }
                this.dataToSend.push(product1);
                this.empty = false;

              }
            });
          });

          gralService.facturarPedidos(this.dataToSend)
            .subscribe((data: any) => {
              if (data.exitoso) {
                this.subtotal = data.data.subtotal;
                this.impuestos = data.data.impuesto;
                this.total = data.data.total;
              }
            }, (error) => {
              debugger
              Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error',
                text: error.message,
                showConfirmButton: false,
                timer: 4000
              });
            });
        } else {
          this.empty = true;

        }
      }, (error) => {
        debugger
        Swal.fire({
          icon: 'error',
          title: 'Ocurrio un error',
          text: error.message,
          showConfirmButton: false,
          timer: 4000
        });
      }

      );
    } else {
      this.empty = true;
    }


  }

  ngOnInit(): void {
  }


  cancelarTodo() {
    Swal.fire({
      icon: 'info',
      title: 'Informacion',
      text: 'Todos los productos seleccionados fueron borrados del carrito de compras, para comprar debe volver al inicio',
      showConfirmButton: false,
      timer: 4000
    })
    sessionStorage.clear()
    this.router.navigate(["/inicio"]);
  }

  onSubmit(f: NgForm) {
    debugger
    if (f.valid) {

      let objPedido = {
        nombre: f.value.nombre,
        direccion: f.value.direccion,
        telefono: `${f.value.celular}`,
        impuestos: `${this.impuestos}`,
        subtotal: `${this.subtotal}`,
        total: `${this.total}`,
        productos: this.dataToSend
      }

      this.gralService.guardarPedido(objPedido).subscribe(
        (data: any) => {
          if (data.exitoso) {
            Swal.fire({
              icon: 'success',
              title: 'Grandioso...',
              text: 'Tu pedido se creo exitosamente',
              showConfirmButton: false,
              timer: 4000
            })
            sessionStorage.clear()
            this.router.navigate(["/pedidos"]);
          }
        }, (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Ocurrio un error',
            text: error.message,
            showConfirmButton: false,
            timer: 4000
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Falta un paso',
        text: 'Debes completar todos los campos del formulario',
        showConfirmButton: false,
        timer: 4000
      })
    }
  }

}
