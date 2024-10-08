import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from 'src/app/material/material-ui/material-ui.module';
import { HomeRoutingModule } from 'src/app/pages/main/home/home-routing.module';
import { SharedPipeModule } from 'src/app/pipes/shared-pipe/shared-pipe.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ParentsCardsComponent } from './parents-cards.component';



@NgModule({
  declarations: [
    ParentsCardsComponent
  ],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedPipeModule,
  ],
  exports:[
    ParentsCardsComponent,
  ]
})
export class ParentsCardsModule { }
