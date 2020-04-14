import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  public planetsList;
  public hasResults: boolean;
  private id;

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fetchAPIData();
  }

  fetchAPIData() {
    return this.searchService.getData('hello', 'planets', this.id).subscribe(
      result => {
        this.planetsList = result,
        this.hasResults = Boolean(result);
      }
    );
  }
}
