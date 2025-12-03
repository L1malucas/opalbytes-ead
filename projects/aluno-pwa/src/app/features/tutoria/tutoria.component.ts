import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tutoria',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="tutoria-page">
      <h1>💬 Tutoria - Mensagens</h1>

      <div class="tutoria-container">
        <div class="mensagens-lista">
          <h3>Conversas</h3>
          <div class="conversa-item"
               *ngFor="let conversa of conversas"
               [class.active]="conversaSelecionada === conversa"
               (click)="selecionarConversa(conversa)">
            <div class="avatar">{{ conversa.tutor[0] }}</div>
            <div class="info">
              <strong>{{ conversa.tutor }}</strong>
              <p>{{ conversa.ultimaMensagem }}</p>
            </div>
            <span class="badge" *ngIf="conversa.naoLidas > 0">{{ conversa.naoLidas }}</span>
          </div>
        </div>

        <div class="mensagens-chat" *ngIf="conversaSelecionada">
          <div class="chat-header">
            <h3>{{ conversaSelecionada.tutor }}</h3>
            <span>{{ conversaSelecionada.curso }}</span>
          </div>

          <div class="chat-mensagens">
            <div class="mensagem"
                 *ngFor="let msg of mensagens"
                 [class.minha]="msg.tipo === 'enviada'">
              <div class="mensagem-content">
                <p>{{ msg.texto }}</p>
                <span class="hora">{{ msg.hora }}</span>
              </div>
            </div>
          </div>

          <div class="chat-input">
            <input type="text"
                   [(ngModel)]="novaMensagem"
                   placeholder="Digite sua mensagem..."
                   (keyup.enter)="enviarMensagem()">
            <button (click)="enviarMensagem()">Enviar</button>
          </div>
        </div>

        <div class="mensagens-vazio" *ngIf="!conversaSelecionada">
          <p>Selecione uma conversa para visualizar as mensagens</p>
        </div>
      </div>

      <a routerLink="/dashboard" class="back-link">← Voltar ao Dashboard</a>
    </div>
  `,
  styles: [`
    .tutoria-page {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
    .tutoria-container {
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      height: 600px;
    }
    .mensagens-lista {
      border-right: 1px solid #e0e0e0;
      overflow-y: auto;
    }
    .mensagens-lista h3 {
      padding: 20px;
      margin: 0;
      background: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    .conversa-item {
      display: flex;
      gap: 12px;
      padding: 16px 20px;
      cursor: pointer;
      border-bottom: 1px solid #f0f0f0;
      transition: background 0.2s;
      position: relative;
    }
    .conversa-item:hover {
      background: #f9f9f9;
    }
    .conversa-item.active {
      background: #e8eaf6;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #667eea;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      flex-shrink: 0;
    }
    .conversa-item .info {
      flex: 1;
      min-width: 0;
    }
    .conversa-item strong {
      color: #333;
      font-size: 14px;
    }
    .conversa-item p {
      margin: 4px 0 0 0;
      color: #999;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .badge {
      background: #667eea;
      color: white;
      border-radius: 12px;
      padding: 2px 8px;
      font-size: 11px;
      font-weight: 600;
    }
    .mensagens-chat {
      display: flex;
      flex-direction: column;
    }
    .chat-header {
      padding: 20px;
      background: #f5f5f5;
      border-bottom: 1px solid #e0e0e0;
    }
    .chat-header h3 {
      margin: 0 0 5px 0;
      color: #333;
    }
    .chat-header span {
      color: #667eea;
      font-size: 14px;
    }
    .chat-mensagens {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .mensagem {
      display: flex;
    }
    .mensagem.minha {
      justify-content: flex-end;
    }
    .mensagem-content {
      max-width: 70%;
      background: #f0f0f0;
      padding: 12px 16px;
      border-radius: 12px;
    }
    .mensagem.minha .mensagem-content {
      background: #667eea;
      color: white;
    }
    .mensagem-content p {
      margin: 0 0 5px 0;
    }
    .hora {
      font-size: 11px;
      color: #999;
    }
    .mensagem.minha .hora {
      color: rgba(255,255,255,0.7);
    }
    .chat-input {
      display: flex;
      padding: 20px;
      border-top: 1px solid #e0e0e0;
      gap: 12px;
    }
    .chat-input input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #e0e0e0;
      border-radius: 24px;
      font-size: 14px;
    }
    .chat-input button {
      background: #667eea;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 24px;
      cursor: pointer;
      font-weight: 600;
    }
    .chat-input button:hover {
      background: #5568d3;
    }
    .mensagens-vazio {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }
    .back-link {
      display: inline-block;
      margin-top: 20px;
      color: #667eea;
      text-decoration: none;
      font-size: 16px;
    }
    .back-link:hover {
      text-decoration: underline;
    }
  `]
})
export class TutoriaComponent {
  conversaSelecionada: any = null;
  novaMensagem = '';

  conversas = [
    {
      tutor: 'Prof. João Silva',
      curso: 'Introdução ao Angular',
      ultimaMensagem: 'Entendi sua dúvida, vou explicar...',
      naoLidas: 2
    },
    {
      tutor: 'Profa. Maria Santos',
      curso: 'TypeScript Avançado',
      ultimaMensagem: 'Parabéns pelo progresso!',
      naoLidas: 0
    }
  ];

  mensagens = [
    { tipo: 'recebida', texto: 'Olá! Como posso ajudar?', hora: '10:30' },
    { tipo: 'enviada', texto: 'Tenho uma dúvida sobre componentes', hora: '10:32' },
    { tipo: 'recebida', texto: 'Claro! Qual é a sua dúvida?', hora: '10:33' },
  ];

  selecionarConversa(conversa: any) {
    this.conversaSelecionada = conversa;
    conversa.naoLidas = 0;
  }

  enviarMensagem() {
    if (this.novaMensagem.trim()) {
      this.mensagens.push({
        tipo: 'enviada',
        texto: this.novaMensagem,
        hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      });
      this.novaMensagem = '';
    }
  }
}
