import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  listPokemones: any = [];

  constructor(private pokeService: PokedexService, private router: Router) {} // Inyecta Router

  ngOnInit() {
    this.pokeService.getListPokemones().subscribe((data) => {
      this.listPokemones = data.results;
      console.log(data.results);
    });
  }

  handleDetail(url: string) {
    console.log(url);
    this.pokeService.setUrele(url); // Guarda la URL en el servicio
    this.router.navigate(['/pokemon', { urele: url }]); // Navega pasando el parámetro
  }
}
