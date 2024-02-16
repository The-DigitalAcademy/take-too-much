import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddressbookpagePage } from './addressbookpage.page';

const routes: Routes = [
  {
    path: '',
    component: AddressbookpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressbookpagePageRoutingModule {}
