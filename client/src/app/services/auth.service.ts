// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    // Vérifier si un utilisateur est déjà stocké
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  // Méthode d'inscription (sans backend)
  register(userData: { name: string; email: string; role: 'patient' | 'doctor' }): void {
    // Créer un utilisateur avec un ID généré
    const user: User = {
      ...userData,
      id: 'user_' + Math.random().toString(36).substring(2, 9)
    };
    
    console.log('Utilisateur enregistré:', user); // Pour débogage
    
    // Sauvegarder dans localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Mettre à jour l'observable
    this.currentUserSubject.next(user);
    
    // Rediriger vers le dashboard approprié
    this.redirectToDashboard(user.role);
  }

  // Méthode de redirection selon le rôle
  redirectToDashboard(role: 'patient' | 'doctor'): void {
    if (role === 'patient') {
      this.router.navigate(['/dashboard/patient']);//dashboard-patient.component.html
    } else {
      this.router.navigate(['/dashboard/doctor']);
    }
  }

  // Vérifier si un utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  // Obtenir l'utilisateur actuel
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Obtenir le rôle de l'utilisateur connecté
  getUserRole(): string | null {
    return this.currentUserSubject.value?.role || null;
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}