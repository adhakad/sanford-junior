import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartenersTalkRoutingModule } from './parteners-talk-routing.module';
import { PartenersTalkComponent } from './parteners-talk.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    PartenersTalkComponent
  ],
  imports: [
    CommonModule,
    PartenersTalkRoutingModule,
    MainSharedModule
  ]
})
export class PartenersTalkModule { }
