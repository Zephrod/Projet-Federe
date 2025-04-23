import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';
  users: any[] = []; // 👈 ajoute cette ligne
  constructor(private authService: ApiService) {}

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

