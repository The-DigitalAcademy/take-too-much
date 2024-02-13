import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderspagePage } from './orderspage.page';

const routes: Routes = [
  {
    path: '',
    component: OrderspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderspagePageRoutingModule {}
