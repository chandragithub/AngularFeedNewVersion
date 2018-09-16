import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Title } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';

import { ArticlesService } from '../services/articles.service';

import { staticData } from '../../global/static';

export interface Item { 
    firstname: string,
    lastname: string,
    experience: string,
    password: string
 }

@Component({
  selector: 'af-articles',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  technologyName: string  = 'angularfeed';
  ourTech: Array<Object> = staticData.technology;
  private itemDoc: AngularFirestoreCollection<Item>;
  item : any;
  articleLists: any;
  title: string;
  

  constructor(private afs: AngularFirestore, 
              private articlesService: ArticlesService,
              private spinner: Ng4LoadingSpinnerService,
              private location: PlatformLocation,
              private titleService: Title,) {
    afs.collection<any>('users').doc('vMlhxPzfAb90WVlq0bhb').ref.get().then(function (doc) {
      if (doc.exists) {
        console.log(doc.data());
      } else {
        console.log("NO documents");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });;
  }

  ngOnInit() {
    this.articlesService.getArticleList().subscribe(data => {
      this.articleLists = data.json();
      this.spinner.hide();
    },
      error => {
        throw error;
      })
  }

  articleClick() {
    
  }

  ngOnDestroy() {
  }

}
