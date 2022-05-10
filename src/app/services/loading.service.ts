import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public active: boolean = false;

  public start() {
    this.active = true;
  }

  public stop() {
    this.active = false;
  }

}
