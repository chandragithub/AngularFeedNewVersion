import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './profiles.component';
import { ProgressbarModule } from 'ngx-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule,
    SharedModule
  ],
  declarations: [
    ProfilesComponent
  ],
  exports: [
    ProfilesComponent
  ]
})
export class ProfilesModule { }
