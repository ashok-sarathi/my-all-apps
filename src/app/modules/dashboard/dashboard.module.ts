import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
