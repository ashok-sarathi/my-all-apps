import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    NavigationModule
  ],
  declarations: [HomeComponent, ProjectsComponent]
})
export class DashboardModule { }
