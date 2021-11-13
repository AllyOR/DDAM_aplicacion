import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaltoPageRoutingModule } from './salto-routing.module';

import { SaltoPage } from './salto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaltoPageRoutingModule
  ],
  declarations: [SaltoPage]
})
export class SaltoPageModule {}
