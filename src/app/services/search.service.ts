import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) {}

  // To do: Perform the HTTP requests through a proxy to avoid CORS issues
  getSearch(queryValue, path): Observable<any> {
    let queryParam = '';
    if (queryValue) {
      queryParam = `?search=${queryValue}`;
    }
    return this.http.get(`${env.swapiUrl}/${path}${queryParam}`);
  }

  getList(path, page): Observable<any> {
    let queryParam;
    if (page !== null) {
      queryParam = `?page=${page}`;
    }
    return this.http.get(`${env.swapiUrl}/${path}${queryParam}`);
  }

  getDetails(path, id): Observable<any> {
    return this.http.get(`${env.swapiUrl}/${path}/${id}`);
  }
}
