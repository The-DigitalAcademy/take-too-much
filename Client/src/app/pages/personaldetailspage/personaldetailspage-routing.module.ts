import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaldetailspagePage } from './personaldetailspage.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaldetailspagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaldetailspagePageRoutingModule {}
