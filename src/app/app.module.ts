import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './views/movies/movies.component';
import { PlanetsComponent } from './views/planets/planets.component';
import { CharactersComponent } from './views/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    PlanetsComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
