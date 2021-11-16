import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaltoPageRoutingModule } from './salto-routing.module';

import { SaltoPage } from './salto.page';
import {ComponentsModule} from "../../components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SaltoPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SaltoPage]
})
export class SaltoPageModule {}
