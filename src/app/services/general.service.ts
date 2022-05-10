import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl = environment.baseUrl;
  baseUrl2 = environment.baseUrl2;
  constructor(private http: HttpClient) { }

  getItem(id: number) {
    return this.http.get(this.baseUrl + "api/prductos/" + id)
  }

  getItems() {
    return this.http.get(this.baseUrl2 + "api/Pedido/GetProductos")
  }

  getPedidos() {
    return this.http.get(this.baseUrl + "api/Facturacion/obtenerPedidos")
  }

  facturarPedidos(data:any) {
    return this.http.post(this.baseUrl + "api/Facturacion/FacturarPedido", data)
  }

  guardarPedido(data:any) {
    return this.http.post(this.baseUrl + "api/Facturacion/GuardarPedido", data)
  }

}
