import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { SharedModule } from '../shared/shared.module';
import { RouteModule } from '../route/route.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouteModule
  ],
  declarations: [TrainingComponent]
})
export class TrainingModule { }
