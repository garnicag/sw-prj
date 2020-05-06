import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { GetService } from '../../services/get.service';
import { element } from 'protractor';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersList;
  public hasResults: boolean;
  public selectedCharacter;
  public selectedCharacterHomeworld: Array<any> = [];
  public selectedCharacterSpecies: Array<any> = [];
  public selectedCharacterStarships: Array<any> = [];
  public selectedCharacterVehicles: Array<any> = [];
  public selectedCharacterFilms: Array<any> = [];
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
    this.searchService.getList('people', '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        this.charactersList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList('people', i).subscribe(
            charactersResult => {
              this.charactersList = [...this.charactersList, ...charactersResult.results];
              if (i === totalPages) { this.selectCharacter('Luke Skywalker'); }
            }
          );
        }
      }
    );
  }

  // homeworld
  // species
  // starships
  // vehicles
  // films

  selectCharacter(character): void {
    this.selectedCharacterHomeworld = [];
    this.selectedCharacterSpecies = [];
    this.selectedCharacterStarships = [];
    this.selectedCharacterVehicles = [];
    this.selectedCharacterFilms = [];

    this.selectedCharacter = this.charactersList.filter((el) => {
      if (el.name.toLowerCase() === character.toLowerCase()) { return true; }
    });
    this.selectedCharacter = this.selectedCharacter[0];

    if (this.selectedCharacter.homeworld) {
      this.getHomeworld(this.selectedCharacter.homeworld);
    }

    this.selectedCharacter.species.forEach(element => {
      const id = element.split('/');
      this.getSpecies(id[id.length - 2]);
    });

    this.selectedCharacter.vehicles.forEach(element => {
      const id = element.split('/');
      this.getVehicles(id[id.length - 2]);
    });

    this.selectedCharacter.starships.forEach(element => {
      const id = element.split('/');
      this.getStarships(id[id.length - 2]);
    });

    this.selectedCharacter.films.forEach(element => {
      const id = element.split('/');
      this.getFilms(id[id.length - 2]);
    });

    console.log(this.selectedCharacter, this.id);
  }

  getHomeworld(url): void {
    let id = url.split('/');
    id = id[id.length - 2];

    this.searchService.getDetails('planets', id).subscribe(
      result => {
        console.log('======>>>>', result.name);
        this.selectedCharacterHomeworld = result.name;
      }
    );
  }

  getSpecies(id): void {
    this.searchService.getDetails('species', id).subscribe(
      result => {
        this.selectedCharacterSpecies.push(result);
      }
    );
  }

  getVehicles(id): void {
    this.searchService.getDetails('vehicles', id).subscribe(
      result => {
        this.selectedCharacterVehicles.push(result);
      }
    );
  }

  getStarships(id): void {
    this.searchService.getDetails('starships', id).subscribe(
      result => {
        this.selectedCharacterStarships.push(result);
      }
    );
  }

  getFilms(id): void {
    this.searchService.getDetails('films', id).subscribe(
      result => {
        this.selectedCharacterFilms.push(result);
      }
    );
  }

  characterID(url): number {
    console.log(url);
    const id = url.split('/');
    return id[id.length - 2];
  }
}
