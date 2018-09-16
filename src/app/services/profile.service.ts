import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  pageUrl: string = 'assets/data/profile';

  constructor(private http: Http) { }

  public getProfileByName(name): Observable<any> {
    return this.http.get(this.pageUrl + '/' + name + '.json');
  }
}
