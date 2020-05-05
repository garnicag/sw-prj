import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../services/search.service';

@Injectable()
export class GetService {
  constructor(public searchService: SearchService) { }

  id(url): number {
    console.log(url);
    const id = url.split('/');
    return id[id.length - 2];
  }

  allElements(section) {
    let resultsList;

    this.searchService.getList(section, '').subscribe(
      result => {
        const totalPages = Math.ceil((result.count) / 10);
        resultsList = result.results;

        for (let i = 2; i <= totalPages; i++) {
          this.searchService.getList(section, i).subscribe(
            charactersResult => {
              resultsList = [...resultsList, ...charactersResult.results];
            }
          );
        }
      }
    );
    console.log(resultsList);

    return resultsList;
  }
}