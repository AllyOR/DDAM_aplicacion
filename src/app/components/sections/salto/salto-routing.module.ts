import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaltoPage } from './salto.page';

const routes: Routes = [
  {
    path: '',
    component: SaltoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaltoPageRoutingModule {}
