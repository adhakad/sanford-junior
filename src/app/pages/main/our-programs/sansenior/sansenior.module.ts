import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanseniorRoutingModule } from './sansenior-routing.module';
import { SanseniorComponent } from './sansenior.component';


@NgModule({
  declarations: [
    SanseniorComponent
  ],
  imports: [
    CommonModule,
    SanseniorRoutingModule
  ]
})
export class SanseniorModule { }
