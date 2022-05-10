import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PantallaInicioComponent } from './components/pantalla-inicio/pantalla-inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ExitosoComponent } from './components/exitoso/exitoso.component';
import { ErrorComponent } from './components/error/error.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { ResumenCompraComponent } from './components/resumen-compra/resumen-compra.component';
import { AgregarCompraComponent } from './components/agregar-compra/agregar-compra.component';

const routes: Routes = [
  { path: 'inicio', component: PantallaInicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'facturacion', component: FacturacionComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'resumen', component: ResumenCompraComponent },
  { path: 'agregar', component: AgregarCompraComponent },
  { path: 'exitoso', component: ExitosoComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo:"/inicio", pathMatch: "full"},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
