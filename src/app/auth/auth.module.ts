import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { ErrorComponent } from './error/error.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';



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
