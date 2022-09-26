import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    AddComponent,
    FindComponent,
    PokedexComponent,
    PokemonComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
  ]
})
export class PokedexModule { }
