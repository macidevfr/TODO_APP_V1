import { MissionService } from 'src/app/services/mission.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Mission } from 'src/app/models/mission.model';
import { tap, switchMap, filter, map } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent implements OnInit {
  user: User;
  activeMissionsList: Mission[] = [];
  inactiveMissionsList: Mission[] = [];

  constructor(
    private readonly missionService: MissionService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getUserMissions();
  }

  getUserMissions() {
    this.missionService
      .getMissionsByID(this.user.id)
      .pipe(
        tap(
          (missions) =>
            (this.activeMissionsList = missions.filter(
              (mission) => mission.active === true
            ))
        ),
        tap(
          (missions) =>
            (this.inactiveMissionsList = missions.filter(
              (mission) => mission.active === false
            ))
        ),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe();
  }

  desactivateMission(idMission: number) {
    this.missionService
      .desactivateMission(idMission)
      .pipe(
        tap(() => this.getUserMissions()),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe();
  }
}
