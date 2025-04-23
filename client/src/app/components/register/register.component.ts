import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  message: string = '';
  users: any[] = [];
  newUser = {name : '', email: '', password: ''};
  credentials = {email: '', password: ''};
  errorMessage = '';

  constructor(
    private authService: ApiService,
    private router: Router
  ) {}

  createNewUser() {
    this.authService.createUser(this.newUser).subscribe({
      next: (res) => {
        console.log('Utilisateur créé ✅:', res);
    
        this.users.push(res); 
        this.newUser.name = ''; 
        this.newUser.email = '';
        this.newUser.password = '';
        this.router.navigateByUrl("/dashboard");

      },
      error: (err) => console.error('Erreur lors de la création ❌:', err)
    });
  }

  ngOnInit() {
    this.authService.getUser().subscribe({
      next: (users) => {
        console.log('UTILISATEURS REÇUS 🔥:', users);
        this.users = users;
      },
      error: (err) => {
        console.error('Erreur lors du fetch des utilisateurs:', err);
      }
    });
  }
}