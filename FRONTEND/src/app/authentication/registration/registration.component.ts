import { tap, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    first_name: new FormControl(''),
    username: new FormControl(''),
  });

  constructor(
    private readonly userService: UserService,
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  register() {
    this.userService
      .createUser(this.profileForm.value)
      .pipe(
        switchMap(() =>
          this.authenticationService.login(this.profileForm.value)
        ),
        switchMap(() => this.router.navigate(['/home']))
      )
      .subscribe();
  }
}
