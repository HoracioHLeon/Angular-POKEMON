import { Component, OnInit } from '@angular/core';
import { FavoritoServicesService } from '../favorito-services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private serviceFavorito: FavoritoServicesService){ }
  public listPokemons:Array<any> = []
  ngOnInit(): void {
    this.serviceFavorito.FavoritoTrigger.subscribe(data => {
      console.log('Recibiendo datos..', data);
      this.listPokemons.push(data);
    })
  }
}
