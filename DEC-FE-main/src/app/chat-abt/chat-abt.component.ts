import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: Date;
}

@Component({
  selector: 'app-chat-abt',
  templateUrl: './chat-abt.component.html',
  styleUrls: ['./chat-abt.component.css']
})
export class ChatAbtComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  
  messages: ChatMessage[] = [];
  userInput: string = '';
  isTyping: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Message de bienvenue
    this.messages.push({
      sender: 'bot',
      text: "Bonjour ! Je suis chatAbt, votre assistant propulsé par l'IA pour la Centrale des Reportings d'Attijari Bank Tunisie. Comment puis-je vous aider aujourd'hui ?",
      time: new Date()
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  sendMessage() {
    if (!this.userInput.trim() || this.isTyping) return;

    // Add user message
    this.messages.push({
      sender: 'user',
      text: this.userInput,
      time: new Date()
    });

    const query = this.userInput;
    this.userInput = '';
    this.isTyping = true;

    // Simulate bot response
    setTimeout(() => {
      this.isTyping = false;
      this.messages.push({
        sender: 'bot',
        text: this.getMockResponse(query),
        time: new Date()
      });
    }, 1500 + Math.random() * 1000); // Random delay 1.5s - 2.5s
  }
  
  sendPrompt(promptText: string) {
    this.userInput = promptText;
    this.sendMessage();
  }

  getMockResponse(query: string): string {
    const q = query.toLowerCase();
    if (q.includes('rapport')) {
      return "Bien sûr ! Je peux générer un rapport personnalisé. Veuillez préciser de quel type de déclaration (ex: TR-DON, VUC) vous parlez et pour quelle période.";
    } else if (q.includes('anomalie') || q.includes('erreur')) {
      return "Il semble que vous cherchez des anomalies. J'ai scanné les dernières transactions : aucune anomalie critique majeure n'a été trouvée pour la dernière période clôturée.";
    } else if (q.includes('bonjour') || q.includes('salut')) {
      return "Bonjour ! Comment puis-je faciliter votre travail aujourd'hui ?";
    }
    return "Ceci est une version de démonstration de chatAbt. Dans la version finale, je me connecterai à la base de données de la banque pour répondre spécifiquement à votre demande concernant : '" + query + "'.";
  }
}
