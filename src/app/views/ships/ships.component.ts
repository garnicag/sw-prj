import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit{
  public shipsList;
  public hasResults: boolean;
  public selectedShip;
  public selectedShipPeople: Array<any> = [];
  public selectedShipFilms: Array<any> = [];
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
    this.searchService.getList('starships', '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        this.shipsList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList('starships', i).subscribe(
            shipsResult => {
              this.shipsList = [...this.shipsList, ...shipsResult.results];
              if (i === totalPages) { this.selectShip('X-wing'); }
            }
          );
        }
      }
    );
  }

  selectShip(ship): void {
    this.selectedShipPeople = [];
    this.selectedShipFilms = [];

    this.selectedShip = this.shipsList.filter((el) => {
      if (el.name.toLowerCase() === ship.toLowerCase()) { return true; }
    });

    this.selectedShip = this.selectedShip[0];

    this.selectedShip.pilots.forEach(element => {
      const id = element.split('/');
      this.getPeople(id[id.length - 2]);
    });

    this.selectedShip.films.forEach(element => {
      const id = element.split('/');
      this.getFilms(id[id.length - 2]);
    });
  }

  getPeople(id): void {
    this.searchService.getDetails('people', id).subscribe(
      result => {
        this.selectedShipPeople.push(result);
      }
    );
  }

  getFilms(id): void {
    this.searchService.getDetails('films', id).subscribe(
      result => {
        this.selectedShipFilms.push(result);
      }
    );
  }

  shipID(url): number {
    const id = url.split('/');
    return id[id.length - 2];
  }
}
