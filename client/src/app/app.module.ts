// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MonappComponent } from './components/monapp/monapp.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'; // C'est un composant standalone
import { ProfilePatientComponent } from './components/dashboard-patient/profile-patient/profile-patient.component';
// ... autres imports

@NgModule({
  declarations: [
    MonappComponent,
    RegisterComponent,
    // Ne pas inclure LoginComponent ici s'il est standalone
    ProfilePatientComponent,
    // ... autres composants non-standalone
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginComponent, // Si c'est un composant standalone, il doit être importé ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }