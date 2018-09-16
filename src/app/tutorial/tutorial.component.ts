import { Component, OnInit } from '@angular/core';
import { staticData } from '../../global/static';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  ourTutorials: Array<Object> = staticData.tutorials;

  constructor() { }

  ngOnInit() {}

}
