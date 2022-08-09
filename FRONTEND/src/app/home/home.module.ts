import { MissionModule } from './components/mission/mission.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from './../main/sidebar/sidebar.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SidebarModule, RouterModule, MissionModule],
})
export class HomeModule {}
