import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  message: string = '';
  users: any[] = [];
  newUser = {name : '', email: '', password: ''};
  credentials = {email: '', password: ''};
  errorMessage = '';

  constructor(
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

