import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message: string = '';
  users: any[] = [];
  newUser = {name : '', email: '', password: ''};
  credentials = {email: '', password: ''};
  errorMessage = '';

  constructor(
    private authService: ApiService,
    private router: Router
  ) {}




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
   // Ajoutez cette méthode pour vérifier si l'utilisateur est connecté
   isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  // Méthode pour récupérer le token - AJOUTEZ CETTE MÉTHODE ICI
  getToken(): string | null {
    return localStorage.getItem('token');
  }



  
  login() {
    console.log("bouton clické");
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Token reçu :', res.token);
        localStorage.setItem('token', res.token);
        //redirection
        this.router.navigateByUrl("/dashboard");
      },
      error: (err) => {
        this.errorMessage = 'echec de la connexion';
        console.log(err);
      }
    });
  }

  logout() {
    // Afficher le token avant de le supprimer pour vérification
    const token = localStorage.getItem('token');
    console.log('Token avant déconnexion:', token);
    
    // Supprimer le token
    localStorage.removeItem('token');
    
    console.log('Déconnexion réussie, token supprimé');
  }
}

