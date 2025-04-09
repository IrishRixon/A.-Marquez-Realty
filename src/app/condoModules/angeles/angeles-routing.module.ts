import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowResidencesComponent } from './now-residences/now-residences.component';
import { BoniPlaceComponent } from './boni-place/boni-place.component';

const routes: Routes = [
  {
    path: 'nowresidences',
    component: NowResidencesComponent
  },
  {
    path: 'boni-place',
    component: BoniPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngelesRoutingModule { }
