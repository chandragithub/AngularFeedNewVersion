import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'adsense',
  templateUrl: './adsense.component.html',
  styleUrls: ['./adsense.component.css']
})
export class AdsenseComponent implements OnInit {

  @Input() client: 'string';
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  } 

  ngOnInit() {
  }

}
