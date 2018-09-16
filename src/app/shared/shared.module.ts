import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GoTopButtonModule } from 'ng2-go-top-button';
import { PrismModule } from '@ngx-prism/core';
import { AdsenseModule } from 'ng2-adsense';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule, FirebaseOptionsToken } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ApplicationPipesModuleModule } from '../application-pipes-module/application-pipes-module.module';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ContactComponent } from '../contact/contact.component';
import { AngularFeedMainHomeComponent } from '../common/home/home.component';

import { RouteModule } from '../route/route.module';
import { staticData } from '../../global/static';
import { PageNotFoundModule } from '../pagenotfound/pagenotfound.module';

@NgModule({
  imports: [
    CommonModule,
    RouteModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    GoTopButtonModule,
    PrismModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-1466650757473386'
    }),
    FontAwesomeModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ApplicationPipesModuleModule,
    PageNotFoundModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AngularFeedMainHomeComponent,
    ContactComponent
  ],
  exports: [
    ApplicationPipesModuleModule,
    HeaderComponent,
    FooterComponent,
    AngularFeedMainHomeComponent,
    ContactComponent,
    RouteModule,
    PageNotFoundModule,
    FontAwesomeModule,
    PrismModule,
  ],
  providers: [
    { provide: FirebaseOptionsToken, useValue: staticData.firebase }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
