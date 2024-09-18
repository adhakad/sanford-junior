import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToddlerComponent } from './toddler.component';

const routes: Routes = [
  { path: '', component: ToddlerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToddlerRoutingModule { }
