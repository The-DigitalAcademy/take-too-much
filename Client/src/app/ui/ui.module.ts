import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DisplayCardComponent } from './display-card/display-card.component';



@NgModule({
  declarations: [NavBarComponent, DisplayCardComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, DisplayCardComponent]
})
export class UiModule { }
