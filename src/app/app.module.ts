import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DisqusModule } from "ngx-disqus";
import { BsDropdownModule, PaginationModule, ProgressbarModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AdsenseComponent } from './library/adsense/adsense.component';
import { TutorialModule } from './tutorial/tutorial.module';
import { TrainingModule } from './training/training.module';
import { BooksModule } from './books/books.module';
import { ArticleModule } from './article/article.module';
import { SharedModule } from './shared/shared.module';
import { ProfilesModule } from './profiles/profiles.module';


@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TutorialModule,
    TrainingModule,
    BooksModule,
    ArticleModule,
    SharedModule,
    ProfilesModule,
    Ng4LoadingSpinnerModule.forRoot(),
    DisqusModule.forRoot('angularfeed'),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
