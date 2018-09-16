import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { staticData } from '../../global/static';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {

  baseUrl: Array<any> = staticData.server;
  pageUrl = '';
  constructor(private http: Http) {
    this.baseUrl.forEach(server => {
      if (server.name) {
        this.pageUrl = server.url + 'assets/data/tutorials/';
      } else {
        this.pageUrl = 'assets/data/tutorials/';
      }
    });
  }

  public getList(tutorialName): Observable<any> {
    return this.http.get(this.pageUrl + tutorialName + '/list.json');
  }

  public getByTitle(tutorialName, url): Observable<any> {
    return this.http.get(this.pageUrl + tutorialName + '/' + url + '.json');
  }

}
