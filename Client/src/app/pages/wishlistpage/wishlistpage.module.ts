import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishlistpagePageRoutingModule } from './wishlistpage-routing.module';

import { WishlistpagePage } from './wishlistpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishlistpagePageRoutingModule
  ],
  declarations: [WishlistpagePage]
})
export class WishlistpagePageModule {}
