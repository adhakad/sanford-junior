import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NurseryRoutingModule } from './nursery-routing.module';
import { NurseryComponent } from './nursery.component';


@NgModule({
  declarations: [
    NurseryComponent
  ],
  imports: [
    CommonModule,
    NurseryRoutingModule
  ]
})
export class NurseryModule { }
