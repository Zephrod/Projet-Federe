import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; // <- importer ici
import { MonappComponent } from './components/monapp/monapp.component';


const routes: Routes = [
  { path: '', component: MonappComponent },
  {path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
