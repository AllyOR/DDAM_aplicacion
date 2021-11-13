import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuietoPageRoutingModule } from './quieto-routing.module';

import { QuietoPage } from './quieto.page';
import {ComponentsModule} from "../../components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QuietoPageRoutingModule,
        ComponentsModule
    ],
  declarations: [QuietoPage]
})
export class QuietoPageModule {}
