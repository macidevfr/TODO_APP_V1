import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isList: number;
  isMenu: boolean = false;
  isMenuBtn() {
    this.isMenu = !this.isMenu;
  }
  isSearch: boolean = false;
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) {}
  ngOnInit(): void {}

  Logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
