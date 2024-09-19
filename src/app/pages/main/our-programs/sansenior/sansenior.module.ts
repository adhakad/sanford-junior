import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanseniorRoutingModule } from './sansenior-routing.module';
import { SanseniorComponent } from './sansenior.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    SanseniorComponent
  ],
  imports: [
    CommonModule,
    SanseniorRoutingModule,
    MainSharedModule
  ]
})
export class SanseniorModule { }
