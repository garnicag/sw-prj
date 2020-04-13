import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, AfterViewInit {
  protected planetsList: any[] = [];
  protected hasResults: boolean;

  constructor(public searchService: SearchService) {}

  ngOnInit(): void {
    this.fetchAPIData();
  }

  ngAfterViewInit() {
    setTimeout(function(){console.log(this.planetsList)}, 5000);
  }

  fetchAPIData() {
    return this.searchService.getData('hello', 'planets', 1).subscribe(
      result => {
        this.planetsList = result,
        this.hasResults = Boolean(result.total_results)
      }
    );
  }
}
