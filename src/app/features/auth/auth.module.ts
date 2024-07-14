import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
