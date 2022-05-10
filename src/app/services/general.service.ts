import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getItem(id: number) {
    return this.http.get(this.baseUrl + "api/Productos/ObtenerProductoPorId?id=" + id)
  }

  getItems() {
    return this.http.get(this.baseUrl + "api/Productos/ObtenerProductos")
  }

  createItem(data : any){
    return this.http.post(this.baseUrl + "api/Productos/CrearProducto", data)
  }

  getPedidos() {
    return this.http.get(this.baseUrl + "api/Facturacion/ObtenerPedidos")
  }

  facturarPedidos(data:any) {
    return this.http.post(this.baseUrl + "api/Facturacion/FacturarPedido", data)
  }

  guardarPedido(data:any) {
    return this.http.post(this.baseUrl + "api/Facturacion/GuardarPedido", data)
  }

}
