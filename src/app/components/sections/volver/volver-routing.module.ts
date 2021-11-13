import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolverPage } from './volver.page';

const routes: Routes = [
  {
    path: '',
    component: VolverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolverPageRoutingModule {}
