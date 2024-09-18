import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanjuniorRoutingModule } from './sanjunior-routing.module';
import { SanjuniorComponent } from './sanjunior.component';


@NgModule({
  declarations: [
    SanjuniorComponent
  ],
  imports: [
    CommonModule,
    SanjuniorRoutingModule
  ]
})
export class SanjuniorModule { }
