import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuertoPageRoutingModule } from './muerto-routing.module';

import { MuertoPage } from './muerto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuertoPageRoutingModule
  ],
  declarations: [MuertoPage]
})
export class MuertoPageModule {}
