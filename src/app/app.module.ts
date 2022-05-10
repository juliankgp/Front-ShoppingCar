import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ExitosoComponent } from './components/exitoso/exitoso.component';
import { ErrorComponent } from './components/error/error.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumenCompraComponent } from './components/resumen-compra/resumen-compra.component';
import { AgregarCompraComponent } from './components/agregar-compra/agregar-compra.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PantallaInicioComponent,
    ProductosComponent,
    FacturacionComponent,
    ExitosoComponent,
    ErrorComponent,
    PedidosComponent,
    NavbarComponent,
    ResumenCompraComponent,
    AgregarCompraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
