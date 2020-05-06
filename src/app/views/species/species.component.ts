import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit{
  public speciesList;
  public hasResults: boolean;
  public selectedSpecie;
  public selectedSpecieHomeworld: Array<any> = [];
  public selectedSpeciePeople: Array<any> = [];
  public selectedSpecieFilms: Array<any> = [];
  public id;

  constructor(
    public searchService: SearchService,
    private getService: GetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAPIData();
  }

  fetchAPIData(): void {
    this.searchService.getList('species', '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        this.speciesList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList('species', i).subscribe(
            speciesResult => {
              this.speciesList = [...this.speciesList, ...speciesResult.results];
              if (i === totalPages) { this.selectSpecie('Human'); }
            }
          );
        }
      }
    );
  }

  selectSpecie(specie): void {
    this.selectedSpecieHomeworld = [];
    this.selectedSpeciePeople = [];
    this.selectedSpecieFilms = [];

    this.selectedSpecie = this.speciesList.filter((el) => {
      if (el.name.toLowerCase() === specie.toLowerCase()) { return true; }
    });
    this.selectedSpecie = this.selectedSpecie[0];

    if (this.selectedSpecie.homeworld) {
      this.getHomeworld(this.selectedSpecie.homeworld);
    }

    this.selectedSpecie.people.forEach(element => {
      const id = element.split('/');
      this.getPeople(id[id.length - 2]);
    });

    this.selectedSpecie.films.forEach(element => {
      const id = element.split('/');
      this.getFilms(id[id.length - 2]);
    });
  }

  getHomeworld(url): void {
    let id = url.split('/');
    id = id[id.length - 2];

    this.searchService.getDetails('planets', id).subscribe(
      result => {
        this.selectedSpecieHomeworld = result.name;
      }
    );
  }

  getPeople(id): void {
    this.searchService.getDetails('people', id).subscribe(
      result => {
        this.selectedSpeciePeople.push(result);
      }
    );
  }

  getFilms(id): void {
    this.searchService.getDetails('films', id).subscribe(
      result => {
        this.selectedSpecieFilms.push(result);
      }
    );
  }

  specieID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
