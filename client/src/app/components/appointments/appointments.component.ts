import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html'
})
export class AppointmentsComponent implements OnInit {
  appointments: any[] = [];
  newAppointment = { date: '', motif: '', patientId: '', medecinId: '' };
  token: string = '';

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.token = localStorage.getItem('token') || '';
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.appointmentService.getAppointments(this.token).subscribe({
      next: (data) => this.appointments = data,
      error: (err) => console.error(err)
    });
  }

  addAppointment() {
    this.appointmentService.createAppointment(this.newAppointment, this.token).subscribe({
      next: (data) => {
        this.appointments.push(data);
        this.newAppointment = { date: '', motif: '', patientId: '', medecinId: '' };
      },
      error: (err) => console.error(err)
    });
  }

  deleteAppointment(id: number) {
    this.appointmentService.deleteAppointment(id, this.token).subscribe({
      next: () => this.appointments = this.appointments.filter(a => a.id !== id),
      error: (err) => console.error(err)
    });
  }
}