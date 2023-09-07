import { Component, OnInit } from '@angular/core';
import { APIRestService } from './apirest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-POKEMON';
  public cards:any = []
  public dato:any = []
  constructor (private ServiceAPIREST: APIRestService){}
  ngOnInit(): void {
    this.LoadData();
  }

  public LoadData(){
    this.ServiceAPIREST.get('https://pokeapi.co/api/v2/pokemon')
    .subscribe(respuesta => {
      this.cards = respuesta;
      console.log(respuesta);
    })
  }
}
