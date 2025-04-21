import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token'); // ou autre logique

    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']); // redirige si pas connecté
      return false;
    }
  }
}
