import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planetsList: Array<any> = [];
  public hasResults: boolean;
  public planetsTerrains: Array<any> = [];
  public selectedPlanet;
  public selectedPlanetResidents: Array<any> = [];
  public selectedPlanetFilms: Array<any> = [];
  public id;

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id') || 'alderaan';
    // [routerLink]="['/planets', planet.name.toLowerCase()]"
    this.fetchAPIData('');
  }

  fetchAPIData(page): void {
    this.searchService.getList('planets', '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        this.planetsList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList('planets', i).subscribe(
            planetsResult => {
              this.planetsList = [...this.planetsList, ...planetsResult.results];
              if (i === totalPages) { this.selectPlanet('tatooine'); }
            }
          );
        }
      }
    );
  }

  getResidents(id): void {
    this.searchService.getDetails('people', id).subscribe(
      result => {
        this.selectedPlanetResidents.push(result);
      }
    );
  }

  getFilms(id): void {
    this.searchService.getDetails('films', id).subscribe(
      result => {
        this.selectedPlanetFilms.push(result);
      }
    );
  }

  selectPlanet(planet): void {
    this.selectedPlanetResidents = [];
    this.selectedPlanetFilms = [];

    this.selectedPlanet = this.planetsList.filter((el) => {
      if (el.name.toLowerCase() === planet.toLowerCase()) { return true; }
    });
    this.selectedPlanet = this.selectedPlanet[0];

    this.selectedPlanet.residents.forEach(element => {
      const id = element.split('/');
      this.getResidents(id[id.length - 2]);
    });

    this.selectedPlanet.films.forEach(element => {
      const id = element.split('/');
      this.getFilms(id[id.length - 2]);
    });
  }
}
