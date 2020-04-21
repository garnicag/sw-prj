import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './views/planets/planets.component';
import { MoviesComponent } from './views/movies/movies.component';
import { CharactersComponent } from './views/characters/characters.component';
import { ShipsComponent } from './views/ships/ships.component';
import { SpeciesComponent } from './views/species/species.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movies/:id', component: MoviesComponent },
  { path: 'movies/', component: MoviesComponent },
  { path: 'movies', redirectTo: 'movies/', pathMatch: 'full' },

  { path: 'characters/:id', component: CharactersComponent },
  { path: 'characters/', component: CharactersComponent },
  { path: 'characters', redirectTo: 'characters/', pathMatch: 'full' },

  { path: 'planets/:id', component: PlanetsComponent },
  { path: 'planets/', component: PlanetsComponent },
  { path: 'planets', redirectTo: 'planets/', pathMatch: 'full' },

  { path: 'ships/:id', component: ShipsComponent },
  { path: 'ships/', component: ShipsComponent },
  { path: 'ships', redirectTo: 'ships/', pathMatch: 'full' },

  { path: 'species/:id', component: SpeciesComponent },
  { path: 'species/', component: SpeciesComponent },
  { path: 'species', redirectTo: 'species/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
