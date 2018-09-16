import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial.component';
import { AngularComponent } from './angular/angular.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { SharedModule } from '../shared/shared.module';
import { RouteModule } from '../route/route.module';
import { GitComponent } from './git/git.component';
import { WebpackComponent } from './webpack/webpack.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { NightwatchComponent } from './nightwatch/nightwatch.component';
import { JasmineComponent } from './jasmine/jasmine.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouteModule
  ],
  declarations: [
    TutorialComponent, 
    AngularComponent,
    TypescriptComponent,
    FirebaseComponent,
    GitComponent,
    WebpackComponent,
    RxjsComponent,
    NightwatchComponent,
    JasmineComponent,
    NodeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialModule { }
