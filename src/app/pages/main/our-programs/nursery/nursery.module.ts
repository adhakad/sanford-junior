import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseryRoutingModule } from './nursery-routing.module';
import { NurseryComponent } from './nursery.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    NurseryComponent
  ],
  imports: [
    CommonModule,
    NurseryRoutingModule,
    MainSharedModule
  ]
})
export class NurseryModule { }
