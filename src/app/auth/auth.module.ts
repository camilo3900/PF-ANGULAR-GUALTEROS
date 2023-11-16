import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { ErrorComponent } from './pages/error/error.component';




@NgModule({
  declarations: [
    AuthComponent,
    ErrorComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    LoginModule,
    RegisterModule

  ]
})
export class AuthModule { }
