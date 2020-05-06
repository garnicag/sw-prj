import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { GetService } from '../../services/get.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  public charactersList;
  public hasResults: boolean;
  public selectedCharacter;
  public id;

  constructor(
    public searchService: SearchService,
    private getService: GetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchAPIData();
    // this.charactersList = this.searchService.allElements('people');
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

  selectCharacter(character): void {
    this.selectedCharacter = this.charactersList.filter((el) => {
      if (el.name.toLowerCase() === character.toLowerCase()) { return true; }
    });
    this.selectedCharacter = this.selectedCharacter[0];
    console.log(this.selectedCharacter);
  }

  characterID(url): number {
    console.log(url);
    const id = url.split('/');
    return id[id.length - 2];
  }
}
