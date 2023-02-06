import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";
import { User } from './_login';

@Component({
  selector: 'mess-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  user: User = {
    username: '',
    password: ''
  };

  constructor(private authService: LoginService, private router: Router) {}

  login() {
    this.authService.login(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token!);
        this.router.navigate(['/']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
