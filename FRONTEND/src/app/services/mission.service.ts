import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root',
})
export class MissionService {
  constructor(private readonly http: HttpClient) {}

  private resource = environment.API_URL + '/missions/';

  createMission(user, todo): Observable<Mission> {
    let data = new FormData();
    data.append('user', user);
    data.append('todo', todo);
    const url = `${this.resource}`;
    return this.http.post<Mission>(url, data);
  }

  getMissions(): Observable<Mission[]> {
    const url = this.resource;
    return this.http.get<Mission[]>(url);
  }

  getMissionsByID(id: number): Observable<Mission[]> {
    const url = this.resource;
    let params = new HttpParams();
    params = params.append('id', id.toString());
    return this.http.get<Mission[]>(url, { params });
  }

  desactivateMission(id: number): Observable<Mission> {
    const url = `${this.resource}${id}/`;
    const body = { active: false };
    return this.http.patch<Mission>(url, body);
  }
}
