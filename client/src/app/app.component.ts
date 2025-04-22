import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private authService: ApiService) {}

  ngOnInit() {
    this.authService.getHello().subscribe({
      next: (res) => this.message = res.message,
      error: (err) => console.error('Erreur API :', err)
    });
  }
}
