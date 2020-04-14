import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planetsList;
  public hasResults: boolean;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.fetchAPIData();
  }

  fetchAPIData() {
    return this.searchService.getData('hello', 'planets', 4).subscribe(
      result => {
        this.planetsList = result,
        this.hasResults = Boolean(result.total_results)
      }
    );
  }
}
