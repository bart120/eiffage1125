import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


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
  returnUrl = '';

  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.snapshot.params['returnUrl'] || '';
  }

  onLogin(username: string): void {
    console.log(`Login attempt for user: ${username} with password: ${this.password.nativeElement.value}`);
    this.authService.login(username, this.password.nativeElement.value);
    console.log(this.returnUrl);
    if (this.returnUrl !== "") {
      this.router.navigateByUrl(this.returnUrl);
    } else {
      this.router.navigate(['/']);
    }
  }
}
