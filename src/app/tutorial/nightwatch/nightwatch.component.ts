import { Component, OnInit, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';

import { TutorialsService } from '../../services/tutorials.service';
import { staticData } from '../../../global/static';

@Component({
  selector: 'app-nightwatch',
  templateUrl: './nightwatch.component.html',
  styleUrls: ['./nightwatch.component.css']
})
export class NightwatchComponent implements OnInit {

  hooks: Object = {};
  interpolate: Object = { language: 'language interpolated' };
  title: string = '';
  technology: string = '';
  tutorials: Array<Object> = [];
  tutorialLists: Array<Object> = [];
  totalCount: Array<Object> = [];
  pageShow: boolean = false;
  pageId: string = '';
  pageUrl: string = '';
  isPageLoadingError: boolean = false;
  socialNetwork: Array<Object> = staticData.social;


  constructor(private tutorialServices: TutorialsService,
    private location: PlatformLocation,
    private titleService: Title,
    private spinner: Ng4LoadingSpinnerService,
    private element: ElementRef) {
    this.title = "AngularFeed - " + location.pathname.split('/')[3];
    this.technology = location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
    this.spinner.show();

    // load facebook sdk if required
    const pageFBUrl = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1&appId=224062411509344&autoLogAppEvents=1';
    if (!document.querySelector(`script[src='${pageFBUrl}']`)) {
      let script = document.createElement('script');
      script.src = pageFBUrl;
      document.body.appendChild(script);
    }

    // load google plus sdk if required
    const googleUrl = 'https://apis.google.com/js/platform.js';
    if (!document.querySelector(`script[src='${googleUrl}']`)) {
      let script = document.createElement('script');
      script.src = googleUrl;
      document.body.appendChild(script);
    }
  }

  ngOnInit() {
    this.tutorialServices.getByTitle(location.pathname.split('/')[2], location.pathname.split('/')[3]).subscribe(data => {
      this.pageId = location.pathname.split('/')[3];
      this.pageUrl = document.URL;
      this.tutorials = data.json();
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

    this.tutorialServices.getList(location.pathname.split('/')[2]).subscribe(data => {
      this.tutorialLists = data.json();
    },
      error => {
        throw error;
      })
  }

  ngAfterViewInit(): void {
    // render facebook button
    window['FB'] && window['FB'].XFBML.parse();
    // render google plus button
    window['gapi'] && window['gapi'].plusone.go();
  }

  tutorialClick() {
    this.spinner.show();
    setTimeout(() => {
      this.title = "AngularFeed - " + location.pathname.split('/')[3];
      this.ngOnInit();
      this.titleService.setTitle(this.title);
    }, 50);
  }

}
