import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) { }

  public getSearch(queryValue, path): Observable<any> {
    let queryParam = '';
    if (queryValue) {
      queryParam = `?search=${queryValue}`;
    }
    return this.http.get(`${env.swapiUrl}/${path}${queryParam}`);
  }

  public getList(path, page): Observable<any> {
    let queryParam;
    if (page !== null) {
      queryParam = `?page=${page}`;
    }
    return this.http.get(`${env.swapiUrl}/${path}${queryParam}`);
  }

  public getDetails(path, id): Observable<any> {
    return this.http.get(`${env.swapiUrl}/${path}/${id}`);
  }
}
