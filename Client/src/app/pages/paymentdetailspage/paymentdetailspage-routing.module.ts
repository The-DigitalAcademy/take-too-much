import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentdetailspagePage } from './paymentdetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentdetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentdetailspagePageRoutingModule {}
