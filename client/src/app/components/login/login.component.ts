import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']); // Redirige après login
      },
      error: err => alert('Login failed')
    });
  }
}
