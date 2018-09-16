import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafeUrlPipe } from './safe-url.pipe';
import { ToHtmlPipe } from './to-html.pipe';
import { ArticleFilterPipe } from './article-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeUrlPipe,
    ToHtmlPipe,
    ArticleFilterPipe
  ],
  exports: [
    SafeUrlPipe,
    ToHtmlPipe,
    ArticleFilterPipe
  ]
})
export class ApplicationPipesModuleModule { }
