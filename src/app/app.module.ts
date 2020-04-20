import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { MoviesComponent } from './views/movies/movies.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { PlanetComponent } from './views/planets/planet/planet.component';
import { CharactersComponent } from './views/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    PlanetsComponent,
    CharactersComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
