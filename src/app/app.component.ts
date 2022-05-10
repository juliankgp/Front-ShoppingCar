import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carrito de compras';
  constructor(public loadingService: LoadingService) { }

  activeEvent(e:Event){
    debugger
    console.log("heelo");
  }
}
