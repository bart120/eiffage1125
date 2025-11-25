import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimeModule } from '../../core/prime.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeModule
  ],
  exports: []
})
export class AuthenticationModule { }
