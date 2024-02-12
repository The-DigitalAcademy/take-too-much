import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentdetailspagePageRoutingModule } from './paymentdetailspage-routing.module';

import { PaymentdetailspagePage } from './paymentdetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentdetailspagePageRoutingModule
  ],
  declarations: [PaymentdetailspagePage]
})
export class PaymentdetailspagePageModule {}
