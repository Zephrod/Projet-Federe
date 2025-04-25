import { Component } from '@angular/core';
import { HuggingFaceService } from '../../services/huggingface.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: {from: string, text: string}[] = [];
  userInput = '';
  loading = false;

  constructor(private hfService: HuggingFaceService) {}

  send() {
    if (!this.userInput.trim()) return;
    this.messages.push({from: 'user', text: this.userInput});
    const question = this.userInput;
    this.userInput = '';
    this.loading = true;
    this.hfService.sendMessage(question).subscribe({
      next: (res) => {
        const botMsg = res && res.generated_text ? res.generated_text : (res[0]?.generated_text || 'Réponse indisponible');
        this.messages.push({from: 'bot', text: botMsg});
        this.loading = false;
      },
      error: () => {
        this.messages.push({from: 'bot', text: 'Erreur lors de la communication avec l\'IA.'});
        this.loading = false;
      }
    });
  }
}