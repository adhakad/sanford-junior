import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroupRoutingModule } from './playgroup-routing.module';
import { PlaygroupComponent } from './playgroup.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    PlaygroupComponent
  ],
  imports: [
    CommonModule,
    PlaygroupRoutingModule,
    MainSharedModule
  ]
})
export class PlaygroupModule { }
