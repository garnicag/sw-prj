import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from './search.service';

@Injectable()
export class GetService {
  constructor(public searchService: SearchService) { }

  id(url: any): number {
    console.log(url);
    const id = url.split('/');
    return id[id.length - 2];
  }
}
