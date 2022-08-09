import { UserService } from '../../services/user.service';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { tap, switchMap } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly userService: UserService,
    private readonly authenticationService: AuthenticationService,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authenticationService.login(this.profileForm.value).subscribe();
  }
}
