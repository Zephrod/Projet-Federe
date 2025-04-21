// src/app/components/register/register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordError: string = '';
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // Initialiser le formulaire avec validation
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['patient', Validators.required] // Valeur par défaut : patient
    });
  }
  
  onSubmit(): void {
    if (this.registerForm.valid) {
      // Vérifier la correspondance des mots de passe
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      
      if (password !== confirmPassword) {
        this.passwordError = 'Les mots de passe ne correspondent pas';
        return;
      }
      
      // Filtrer le champ confirmPassword et password qui ne sont pas nécessaires pour l'enregistrement
      const { confirmPassword: _, password: __, ...userData } = this.registerForm.value;
      
      // Appeler le service d'authentification
      this.authService.register(userData);
    } else {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.get(key)?.markAsTouched();
      });
    }
  }
}