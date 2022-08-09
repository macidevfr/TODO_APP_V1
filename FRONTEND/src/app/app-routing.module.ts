import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGardService as AuthGuard } from './services/auth-gard.service';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { TodoComponent } from './home/components/todo/todo.component';
import { MissionComponent } from './home/components/mission/mission.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'todos', component: TodoComponent },
      { path: 'missions', component: MissionComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
