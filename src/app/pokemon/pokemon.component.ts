import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  poki: any;
  urele: string = ''; // Guarda la URL recibida

  constructor(private pokeService: PokedexService, private route: ActivatedRoute) {} // Inyecta ActivatedRoute

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.urele = params['urele']; // Obtiene la URL desde los parámetros
      console.log('URL recibida en Pokémon:', this.urele);

      if (this.urele) {
        this.pokeService.getPokemon(this.urele).subscribe(
          (data) => {
            this.poki = data;  // Guarda los datos del Pokémon
            console.log('Datos del Pokémon:', this.poki);
          },
          (error) => {
            console.error('Error al obtener el Pokémon:', error);
          }
        );
      } else {
        console.error('No se recibió una URL válida.');
      }
    });
  }
}
