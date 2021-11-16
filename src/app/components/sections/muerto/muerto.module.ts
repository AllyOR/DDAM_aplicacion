import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuertoPageRoutingModule } from './muerto-routing.module';

import { MuertoPage } from './muerto.page';
import {ComponentsModule} from "../../components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MuertoPageRoutingModule,
        ComponentsModule
    ],
  declarations: [MuertoPage]
})
export class MuertoPageModule {}
