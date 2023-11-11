import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboarddRoutingModule } from './dashboardd-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    HeaderComponent,
    AddFoyerComponent,
  ],
  imports: [CommonModule, DashboarddRoutingModule, ReactiveFormsModule],
})
export class DashboarddModule {}
