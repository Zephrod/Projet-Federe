import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilePatientComponent } from './components/dashboard-patient/profile-patient/profile-patient.component';
import { MonappComponent } from './components/monapp/monapp.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: MonappComponent }, // Page d'accueil
  { path: 'register', component: RegisterComponent }, // Page d'inscription
  { path: 'login', component: LoginComponent }, // Page de connexion
  { 
    path: 'dashboard/patient', 
    component: ProfilePatientComponent,
    canActivate: [AuthGuard] // Protéger cette route avec AuthGuard
  }, 
  // { 
  //   path: 'dashboard/doctor', 
  //   component: ProfileMedecinComponent,
  //   canActivate: [AuthGuard] // Protéger cette route avec AuthGuard quand disponible
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }