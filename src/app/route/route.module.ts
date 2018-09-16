import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFeedMainHomeComponent } from '../common/home/home.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { ContactComponent } from '../contact/contact.component';

// articles component routing
import { ArticleComponent } from '../article/article.component';
import { ArticleHomeComponent } from '../article/article-home/article-home.component';

// tutorials component routing
import { TutorialComponent } from '../tutorial/tutorial.component';
import { FirebaseComponent } from '../tutorial/firebase/firebase.component';
import { AngularComponent } from '../tutorial/angular/angular.component';
import { TypescriptComponent } from '../tutorial/typescript/typescript.component';
import { GitComponent } from '../tutorial/git/git.component';
import { WebpackComponent } from '../tutorial/webpack/webpack.component';
import { RxjsComponent } from '../tutorial/rxjs/rxjs.component';
import { NightwatchComponent } from '../tutorial/nightwatch/nightwatch.component';
import { JasmineComponent } from '../tutorial/jasmine/jasmine.component';
import { NodeComponent } from '../tutorial/node/node.component';

// training component routing
import { TrainingComponent } from '../training/training.component';

// books component routing
import { BooksComponent } from '../books/books.component';
 
const routes: Routes = [
      { path: '', pathMatch: 'full', component: AngularFeedMainHomeComponent},
      { path: 'articles', component: ArticleComponent },
      { path: 'articles/:id', component: ArticleHomeComponent},
      { path: 'tutorials', component: TutorialComponent },
      { path: 'tutorials/firebase/:id', component: FirebaseComponent },
      { path: 'tutorials/angular/:id', component: AngularComponent },
      { path: 'tutorials/typescript/:id', component: TypescriptComponent },
      { path: 'tutorials/git/:id', component: GitComponent },
      { path: 'tutorials/webpack/:id', component: WebpackComponent },
      { path: 'tutorials/rxjs/:id', component: RxjsComponent },
      { path: 'tutorials/nightwatch/:id', component: NightwatchComponent },
      { path: 'tutorials/jasmine/:id', component: JasmineComponent },
      { path: 'tutorials/node/:id', component: NodeComponent },
      { path: 'trainings', component: TrainingComponent},
      { path: 'books', component: BooksComponent},
      { path: 'profile/:id', component: ProfilesComponent},
      { path: 'contact', component: ContactComponent},
      { path: '**', redirectTo: '', component: AngularFeedMainHomeComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }