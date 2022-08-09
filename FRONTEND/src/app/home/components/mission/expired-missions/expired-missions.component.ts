import { Component, Input, OnInit } from '@angular/core';
import { Mission } from 'src/app/models/mission.model';

@Component({
  selector: 'app-expired-missions',
  templateUrl: './expired-missions.component.html',
  styleUrls: ['./expired-missions.component.scss'],
})
export class ExpiredMissionsComponent implements OnInit {
  @Input() missions: Mission[];

  constructor() {}

  ngOnInit(): void {}
}
