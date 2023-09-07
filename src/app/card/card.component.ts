import { Component, OnInit, Input } from '@angular/core';
import { FavoritoServicesService } from '../favorito-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any;
  public image!: string;
  
  constructor(private serviceFavorito: FavoritoServicesService){ }

  ngOnInit(): void{
    this.image = 'https://picsum.photos/536/354'
  }

  AddFavorito(){
    console.log(this.dataEntrante)
    this.serviceFavorito.FavoritoTrigger.emit({
      data: this.dataEntrante
    })
  }
}
