import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false,
})
export class AppComponent {
  message: string = '';  // Variable pour afficher le message

  afficherMessage(): void {
    this.message = 'Bonjour, vous avez cliqué sur le bouton !';
  }
}
