import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaldetailspagePageRoutingModule } from './personaldetailspage-routing.module';

import { PersonaldetailspagePage } from './personaldetailspage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaldetailspagePageRoutingModule
  ],
  declarations: [PersonaldetailspagePage]
})
export class PersonaldetailspagePageModule {}
