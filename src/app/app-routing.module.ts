import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from './views/planets/planets.component';

const routes: Routes = [
  { path: 'planets/:id', component: PlanetsComponent },
  { path: 'planets/', component: PlanetsComponent },
  { path: 'planets', redirectTo: 'planets/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
