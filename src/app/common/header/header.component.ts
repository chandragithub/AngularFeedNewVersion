import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { staticData } from '../../../global/static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  subMenu: boolean    = false;
  menu: Array<Object>  = staticData.menu;

  constructor(private router: Router) { }

  ngOnInit() { }

  public onMenuClose() {
    this.subMenu = false;
  }
  public onMenuOpen() {
    this.subMenu = true;
  }
}
