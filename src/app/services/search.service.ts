import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) {}

  // Perform the HTTP requests through a proxy to avoid CORS issues
  getData(queryValue, path, id): Observable<any> {
    return this.http.get(`${env.swapiUrl}/${path}/${id}`);
  }
}