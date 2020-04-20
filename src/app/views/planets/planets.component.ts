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
    this.fetchAPIData('');
  }

  fetchAPIData(page) {
    return this.searchService.getData('', 'planets', null, page).subscribe(
      result => {
        this.planetsList = {...result.results, ...this.planetsList},
        result.next ? this.fetchAPIData(result.next) : console.log('last-page');
        // console.log(this.planetsList),
        // this.hasResults = Boolean(result);
      }
    );
  }
}
