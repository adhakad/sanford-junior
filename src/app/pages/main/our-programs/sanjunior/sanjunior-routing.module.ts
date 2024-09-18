import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanjuniorComponent } from './sanjunior.component';

const routes: Routes = [
  { path: '', component: SanjuniorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanjuniorRoutingModule { }
