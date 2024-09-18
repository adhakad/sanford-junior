import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NurseryComponent } from './nursery.component';

const routes: Routes = [
  { path: '', component: NurseryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NurseryRoutingModule { }
