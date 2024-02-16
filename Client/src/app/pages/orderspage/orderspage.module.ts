import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderspagePageRoutingModule } from './orderspage-routing.module';

import { OrderspagePage } from './orderspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderspagePageRoutingModule
  ],
  declarations: [OrderspagePage]
})
export class OrderspagePageModule {}
