import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanjuniorRoutingModule } from './sanjunior-routing.module';
import { SanjuniorComponent } from './sanjunior.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    SanjuniorComponent
  ],
  imports: [
    CommonModule,
    SanjuniorRoutingModule,
    MainSharedModule
  ]
})
export class SanjuniorModule { }
