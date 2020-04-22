import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public moviesList: Array<any> = [];
  public hasResults: boolean;
  public selectedMovie;
  // public selectedPlanetResidents: Array<any> = [];
  // public selectedPlanetFilms: Array<any> = [];
  public id;

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAPIData('');
  }

  fetchAPIData(page): void {
    this.searchService.getList('films', '').subscribe(
      result => {
        this.moviesList = result.results;
        this.selectMovie('a new hope');
      }
    );
  }

  selectMovie(movie): void {
    this.selectedMovie = this.moviesList.filter((el) => {
      if (el.title.toLowerCase() === movie.toLowerCase()) { return true; }
    });
    this.selectedMovie = this.selectedMovie[0];
    console.log(this.selectedMovie);
  }
}
