import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheManansalaComponent } from './the-manansala/the-manansala.component';
import { NowResidencesComponent } from './now-residences/now-residences.component';
import { BoniPlaceComponent } from './boni-place/boni-place.component';

const routes: Routes = [
  {
    path: 'themanansala',
    component: TheManansalaComponent
  },
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
