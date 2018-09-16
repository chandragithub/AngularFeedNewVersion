import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { PlatformLocation } from '@angular/common';
import * as $ from 'jquery';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ArticlesService } from '../../services/articles.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.css']
})
export class ArticleHomeComponent implements OnInit {

  // Properties 
  hooks: Object = {};
  interpolate: Object = { language: 'language interpolated' };
  title: string = '';
  articles: Array<Object> = [];
  articleLists: Array<Object> = [];
  bookList: Array<Object> = [];
  pageId: string = '';
  pageUrl: string = '';
  pageShow: boolean = false;
  technologyName: string = 'angular';
  isPageLoadingError: boolean = false;
  faCoffee = faBook;

  // Constructor
  constructor(private articlesService: ArticlesService,
    private location: PlatformLocation,
    private titleService: Title,
    private spinner: Ng4LoadingSpinnerService,
    private bookService: BookService) {
    this.title = "AngularFeed - " + location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
    this.spinner.show();
  }

  // Angular Initialistaion
  ngOnInit() {
    this.pageId = location.pathname.split('/')[2];
    console.log('p a g e i d', this.pageId);
    this.pageUrl = document.URL;
    this.articlesService.getArticleByTitle(location.pathname.split('/')[2]).subscribe(data => {
      this.articles = data.json();
      this.pageShow = true;
      this.spinner.hide();
      setTimeout(() => {
        $('#' + this.pageId).addClass('list-active');
      }, 50);
    },
      error => {
        this.isPageLoadingError = true;
        this.spinner.hide();
      })

    this.articlesService.getArticleList().subscribe(data => {
      this.articleLists = data.json().slice(0, 5);
      this.spinner.hide();
    },
      error => {
        throw error;
      })

    this.bookService.getBookList(this.technologyName).subscribe(data => {
      this.bookList = data.json();
    })


  }

  articleClick() {
    setTimeout(() => {
      this.title = "AngularFeed - " + location.pathname.split('/')[2];
      this.ngOnInit();
      this.titleService.setTitle(this.title);
    }, 50);
  }

  // Pagination 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;

    this.articlesService.getArticleList().subscribe(data => {
      this.articleLists = data.json().slice(startItem, endItem);
      this.spinner.hide();
    },
      error => {
        throw error;
      })

  }

}
