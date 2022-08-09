import { LoginModule } from './authentication/login/login.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { TodoComponent } from './home/components/todo/todo.component';
import { MissionComponent } from './home/components/mission/mission.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, TodoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
