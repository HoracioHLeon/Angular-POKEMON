import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritoServicesService {
  @Output() FavoritoTrigger: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
