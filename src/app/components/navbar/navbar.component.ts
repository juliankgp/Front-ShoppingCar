import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numProd: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeNumProd(cant: number) {
  }



}
