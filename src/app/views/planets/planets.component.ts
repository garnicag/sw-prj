import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planetsList = [];
  public hasResults: boolean;
  public planetsTerrains = [];
  private id;

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchAPIData('');
  }

  fetchAPIData(page) {
    this.searchService.getList('planets', '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        this.planetsList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList('planets', i).subscribe(
            planetsResult => {
              this.planetsList = [...this.planetsList, ...planetsResult.results];
            }
          );
        }
      }
    );
  }
}
