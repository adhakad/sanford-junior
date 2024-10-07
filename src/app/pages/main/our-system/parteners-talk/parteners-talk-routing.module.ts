import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartenersTalkComponent } from './parteners-talk.component';

const routes: Routes = [
  {path:'',component:PartenersTalkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenersTalkRoutingModule { }
