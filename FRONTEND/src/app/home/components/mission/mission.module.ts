import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpiredMissionsComponent } from './expired-missions/expired-missions.component';
import { RouterModule } from '@angular/router';
import { MissionComponent } from './mission.component';

@NgModule({
  declarations: [MissionComponent, ExpiredMissionsComponent],
  imports: [CommonModule, RouterModule],
  exports: [MissionComponent],
})
export class MissionModule {}
