import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuietoPage } from './quieto.page';

const routes: Routes = [
  {
    path: '',
    component: QuietoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuietoPageRoutingModule {}
