import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';

const Layouts = [
  MasterLayoutComponent,
  FooterLayoutComponent,
]

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [...Layouts ],
  exports:  [...Layouts]
})
export class NavigationModule { }
