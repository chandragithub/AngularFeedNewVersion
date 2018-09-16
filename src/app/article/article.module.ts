import { NgModule } from '@angular/core';
import { RouteModule } from '../route/route.module';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticleHomeComponent } from './article-home/article-home.component';
import { SharedModule } from '../shared/shared.module';
import { DisqusModule } from "ngx-disqus";

@NgModule({
  imports: [
    CommonModule,
    RouteModule,
    SharedModule,
    DisqusModule
  ],
  declarations: [
    ArticleComponent,
    ArticleHomeComponent
  ],
  exports: []
})
export class ArticleModule { }
