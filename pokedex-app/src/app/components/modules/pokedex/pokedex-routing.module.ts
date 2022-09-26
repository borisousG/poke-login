import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ListComponent } from './pages/list/list.component';
import { PokemonResolver } from 'src/app/services/resolvers/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    children: [
      {
        path: '',
        component: PokedexComponent,
      },
      {
        path: 'add',
        component: AddComponent,
      },
      {
        path: 'edit/:id',
        component: AddComponent,
      },
      {
        path: 'find',
        component: FindComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'pokemon/:id',
        component: PokemonComponent,
        resolve: {
          pokemon: PokemonResolver
        }
      },
      {
        path: '**',
        redirectTo: 'list',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
