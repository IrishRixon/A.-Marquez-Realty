import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureNorthComponent } from './azure-north/azure-north.component';
import { MegaWorldComponent } from './mega-world/mega-world/mega-world.component';

const routes: Routes = [
  {
    path: 'azurenorth',
    component: AzureNorthComponent
  },
  {
    path: 'megaworld',
    component: MegaWorldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanFernandoRoutingModule { }
