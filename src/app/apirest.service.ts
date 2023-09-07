import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIRestService {

  constructor(private http: HttpClient) { }

  public get(url:string){
    return this.http.get(url); //METODO GET

  }
}
