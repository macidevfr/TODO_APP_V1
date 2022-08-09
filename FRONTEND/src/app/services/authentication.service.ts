import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  private readonly resource = `${environment.API_URL}/user`;

  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<{ token: string }> {
    const url = `${this.resource}/token/`;
    return this.http.post<{ token: string }>(url, { email, password }).pipe(
      tap((response) => localStorage.setItem('token', response.token)),
      tap(() => this.getLoggedInUser()),
      tap(() => this.router.navigate(['/missions']))
    );
  }

  getLoggedInUser() {
    this.userService
      .getUser()
      .pipe(tap((user) => localStorage.setItem('user', JSON.stringify(user))))
      .subscribe();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
