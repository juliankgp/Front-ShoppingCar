import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  empty: boolean = true;
  constructor(private router: Router, private gralService: GeneralService) {
    gralService.getItems().subscribe((data: any) => {
      if (data.length > 0) {
        this.empty = false;
        this.items = data
      } else {
        this.empty = true;
      }
    });
  }

  items: any;

  ngOnInit(): void {
  }

  productSelect(product: any) {
    console.log(product);
    sessionStorage.setItem("product-select", JSON.stringify(product))
    this.router.navigate(["/agregar"]);
  }

}
