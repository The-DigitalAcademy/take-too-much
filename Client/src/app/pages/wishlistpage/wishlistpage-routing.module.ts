import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishlistpagePage } from './wishlistpage.page';

const routes: Routes = [
  {
    path: '',
    component: WishlistpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistpagePageRoutingModule {}
