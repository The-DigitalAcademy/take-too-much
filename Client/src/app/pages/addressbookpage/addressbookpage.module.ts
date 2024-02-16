import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressbookpagePageRoutingModule } from './addressbookpage-routing.module';

import { AddressbookpagePage } from './addressbookpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressbookpagePageRoutingModule
  ],
  declarations: [AddressbookpagePage]
})
export class AddressbookpagePageModule {}
