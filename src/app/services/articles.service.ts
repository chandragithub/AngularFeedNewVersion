import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { staticData } from '../../global/static';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  baseUrl: Array<any> = staticData.server;
  pageUrl = '';
  constructor(private http: Http) {
    this.baseUrl.forEach(server => {
      if (server.name) {
        this.pageUrl = server.url + 'assets/data/articles';
      } else {
        this.pageUrl = 'assets/data/articles';
      }
    });
  }
  
  public getArticleList(): Observable<any> {
    return this.http.get(this.pageUrl + '/list.json');
  }

  public getArticleByTitle(url): Observable<any> {
    return this.http.get(this.pageUrl + '/' + url + '.json');
  }
  
}
