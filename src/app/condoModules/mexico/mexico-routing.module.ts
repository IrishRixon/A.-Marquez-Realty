import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LighthouseComponent } from './lighthouse/lighthouse.component';

const routes: Routes = [
  {
    path: 'lighthouse',
    component: LighthouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MexicoRoutingModule { }
