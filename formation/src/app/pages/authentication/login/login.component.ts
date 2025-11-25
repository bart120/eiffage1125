import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  @ViewChild('pass')
  //password: ElementRef | undefined;
  password!: ElementRef;

  /*onLogin(username: HTMLInputElement): void {
    console.log('Login attempt for user:', username.value);
  }*/

  constructor() {

  }

  onLogin(username: string): void {
    console.log(`Login attempt for user: ${username} with password: ${this.password.nativeElement.value}`);
  }
}
