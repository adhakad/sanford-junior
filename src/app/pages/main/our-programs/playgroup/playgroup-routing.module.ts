import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroupComponent } from './playgroup.component';

const routes: Routes = [
  { path: '', component: PlaygroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroupRoutingModule { }
