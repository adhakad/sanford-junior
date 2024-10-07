import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsTalkRoutingModule } from './parents-talk-routing.module';
import { ParentsTalkComponent } from './parents-talk.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    ParentsTalkComponent
  ],
  imports: [
    CommonModule,
    ParentsTalkRoutingModule,
    MainSharedModule
  ]
})
export class ParentsTalkModule { }
