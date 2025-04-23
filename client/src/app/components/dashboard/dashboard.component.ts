import { ApiService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: false,
})
export class DashboardComponent  implements OnInit {
  
  errorMessage = '';
  activeSection: string = 'overview';
  currentUser: any = null;
  selectedMessageIndex: number | null = null;
  users: any[] = [];


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

logout() {
  // Afficher le token avant de le supprimer pour vérification
  const token = localStorage.getItem('token');
  console.log('Token avant déconnexion:', token);
  this.router.navigateByUrl("/login");
  // Supprimer le token
  localStorage.removeItem('token');
  
  console.log('Déconnexion réussie, token supprimé');
}

}

