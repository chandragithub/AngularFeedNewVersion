import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { staticData } from '../../global/static';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: Array<any> = staticData.server;
  pageUrl = '';
  constructor(private http: Http) {
    this.baseUrl.forEach(server => {
      if (server.name) {
        this.pageUrl = server.url + 'assets/data/';
      } else {
        this.pageUrl = 'assets/data/';
      }
    });
  }


  public getBookList(technologyName): Observable<any> {
    return this.http.get(this.pageUrl + 'books/technology-books.json');
  }


}
