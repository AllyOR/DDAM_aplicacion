import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolverPageRoutingModule } from './volver-routing.module';

import { VolverPage } from './volver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolverPageRoutingModule
  ],
  declarations: [VolverPage]
})
export class VolverPageModule {}
