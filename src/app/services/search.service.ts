import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) {}

  // To do: Perform the HTTP requests through a proxy to avoid CORS issues
  // To do: Adjust the API result size to show more than 10 items
  getData(queryValue, path, id, page): Observable<any> {
    let queryParam = '';
    if (id) {
      queryParam = `/${id}`;
    } else if (page) {
      queryParam = `?page=${page}`;
    }
    return this.http.get(`${env.swapiUrl}/${path}${queryParam}`);
  }
}
