import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

   pedidos:any;
   empty: boolean = true;
  constructor(private generalServ : GeneralService) {
     generalServ.getPedidos().subscribe((data:any) => {
      if (data.length > 0) {
        debugger
        this.empty = false;
        this.pedidos = data
      }else{
        this.empty = true;
      }
     });
   }

  ngOnInit(): void {
  }

}
