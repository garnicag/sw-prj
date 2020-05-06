import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { GetService } from './services/get.service';
import { MoviesComponent } from './views/movies/movies.component';
import { MovieComponent } from './views/movies/movie/movie.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { PlanetComponent } from './views/planets/planet/planet.component';
import { CharactersComponent } from './views/characters/characters.component';
import { CharacterComponent } from './views/characters/character/character.component';
import { ShipsComponent } from './views/ships/ships.component';
import { SpeciesComponent } from './views/species/species.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    PlanetsComponent,
    PlanetComponent,
    CharactersComponent,
    CharacterComponent,
    ShipsComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    GetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
