import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToddlerRoutingModule } from './toddler-routing.module';
import { ToddlerComponent } from './toddler.component';
import { MainSharedModule } from '../../main-shared/main-shared.module';


@NgModule({
  declarations: [
    ToddlerComponent
  ],
  imports: [
    CommonModule,
    ToddlerRoutingModule,
    MainSharedModule
  ]
})
export class ToddlerModule { }
