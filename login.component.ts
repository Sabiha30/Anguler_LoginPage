import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  loginObj: Login = new Login();

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    if (!this.loginObj.EmailId || !this.loginObj.Password) {
      alert('Please enter Email and Password');
      return;
    }

    this.loginService.login(this.loginObj.EmailId, this.loginObj.Password)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Login Success');
          this.router.navigateByUrl('/dashboard');
        } else {
          alert(res.message || 'Login failed');
        }
      });
  }
}

export class Login {
  EmailId: string = '';
  Password: string = '';
}
