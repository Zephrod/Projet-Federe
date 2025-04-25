import { ApiService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  errorMessage = '';
  activeSection: string = 'overview';
  currentUser: any = null;
  selectedMessageIndex: number | null = null;
  users: any[] = [];
  appointments: any[] = [];
  newAppointment = { date: '', motif: '', patientId: '', medecinId: '' };

  constructor(
    private authService: ApiService,
    private appointmentService: AppointmentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUser().subscribe({
      next: (users: any[]) => { // <-- add type
        console.log('UTILISATEURS REÇUS :', users);
        this.users = users;
      },
      error: (err: any) => { // <-- add type
        console.error('Erreur lors du fetch des utilisateurs:', err);
      }
    });

    // Récupérer les rendez-vous de l'utilisateur connecté
    const token = localStorage.getItem('token');
    if (token) {
      this.appointmentService.getAppointments(token).subscribe({
        next: (appointments: any[]) => { // <-- add type
          this.appointments = appointments;
        },
        error: (err: any) => { // <-- add type
          console.error('Erreur lors du fetch des rendez-vous:', err);
        }
      });
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        console.log('Déconnexion réussie');
        this.router.navigateByUrl("/login");
      },
      error: (err: any) => {
        console.error('Erreur lors de la déconnexion', err);
        this.router.navigateByUrl("/login");
      }
    });
  }

  addAppointment() {
    const token = localStorage.getItem('token');
    if (token) {
      this.appointmentService.createAppointment(this.newAppointment, token).subscribe({
        next: (rdv: any) => {
          this.appointments.push(rdv);
          this.newAppointment = { date: '', motif: '', patientId: '', medecinId: '' };
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout du rendez-vous:', err);
        }
      });
    }
  }
}

