import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/auth.service';
import { Router } from '@angular/router'; // Si vous utilisez le router

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';
  users: any[] = [];
  newUser = {name : '', email: '', password: ''};
  credentials = {email: '', password: ''};
  errorMessage = '';

  constructor(
    private authService: ApiService,
    private router: Router // Si vous utilisez le router
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

  testClick() {
    console.log("c est bon ca marche !!");
  }

  createNewUser() {
    this.authService.createUser(this.newUser).subscribe({
      next: (res) => {
        console.log('Utilisateur créé ✅:', res);
        this.users.push(res); 
        this.newUser.name = ''; 
        this.newUser.email = '';
        this.newUser.password = '';
      },
      error: (err) => console.error('Erreur lors de la création ❌:', err)
    });
  }
  
  login() {
    console.log("bouton clické");
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log('Token reçu :', res.token);
        localStorage.setItem('token', res.token);
      },
      error: (err) => {
        this.errorMessage = 'echec de la connexion';
        console.log(err);
      }
    });
  }

  logout() {
    // Récupérer le token avant de le supprimer (si vous voulez l'afficher)
    const token = localStorage.getItem('token');
    
    // Supprimer le token
    localStorage.removeItem('token');
    
    console.log('Déconnexion réussie. Token supprimé:', token);
    
    // Si vous utilisez le router pour la redirection
    // this.router.navigate(['/login']);
  }
  deleteUser(userId: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      this.authService.deleteUser(userId).subscribe({
        next: (response) => {
          console.log('Utilisateur supprimé avec succès :', response);
          // Mettre à jour la liste des utilisateurs
          this.users = this.users.filter(user => user.id !== userId);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
        }
      });
    }
  }
}