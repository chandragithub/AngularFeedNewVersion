import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  title: string = '';
  profileList: any;
  isPageLoadingError: boolean = false;

  constructor(private profileService: ProfileService,
    private location: PlatformLocation,
    private titleService: Title,
    private spinner: Ng4LoadingSpinnerService) {
    this.title = "AngularFeed - " + location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
    this.spinner.show();
  }

  ngOnInit() {
    this.profileService.getProfileByName(location.pathname.split('/')[2]).subscribe(data => {
      this.profileList = data.json();
      this.spinner.hide();
    },
      error => {
        if (error) {
          this.isPageLoadingError = true;
        }
        this.spinner.hide();
      })
  }

}
