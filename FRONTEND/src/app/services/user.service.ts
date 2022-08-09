import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly resource = `${environment.API_URL}/user`;

  constructor(private readonly http: HttpClient) {}

  createUser(user: User): Observable<User> {
    const url = `${this.resource}/create/`;
    return this.http.post<User>(url, user);
  }

  getUser(): Observable<User> {
    const url = `${this.resource}/me/`;
    return this.http.get<User>(url);
  }
}
