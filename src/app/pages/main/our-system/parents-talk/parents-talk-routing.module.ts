import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsTalkComponent } from './parents-talk.component';

const routes: Routes = [
  {path:'',component:ParentsTalkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsTalkRoutingModule { }
