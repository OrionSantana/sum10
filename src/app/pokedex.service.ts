import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0";
  private limit =50;
  private offset =0;
  public urele = '';

  constructor(private http : HttpClient) { }

  getListPokemones(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${this.limit}?offset=${this.offset}`);
  }

  getPokemon(url : any): Observable<any>{
    return this.http.get(`${url}`);
  }

  setUrele(ur: string){
    this.urele = ur;
  }
}
