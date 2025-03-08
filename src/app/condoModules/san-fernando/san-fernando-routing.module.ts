import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureNorthComponent } from './azure-north/azure-north.component';

const routes: Routes = [
  {
    path: 'azurenorth',
    component: AzureNorthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanFernandoRoutingModule { }
