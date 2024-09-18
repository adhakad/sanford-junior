import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroupRoutingModule } from './playgroup-routing.module';
import { PlaygroupComponent } from './playgroup.component';


@NgModule({
  declarations: [
    PlaygroupComponent
  ],
  imports: [
    CommonModule,
    PlaygroupRoutingModule
  ]
})
export class PlaygroupModule { }
