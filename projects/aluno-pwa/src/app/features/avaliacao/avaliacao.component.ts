import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="avaliacao-page">
      <h1>📝 Avaliações</h1>

      <div class="avaliacoes-grid">
        <div class="avaliacao-card" *ngFor="let avaliacao of avaliacoes">
          <div class="status" [class]="avaliacao.status">
            {{ avaliacao.status === 'disponivel' ? '🟢' : avaliacao.status === 'concluida' ? '✅' : '🔒' }}
          </div>
          <h3>{{ avaliacao.curso }}</h3>
          <p>{{ avaliacao.titulo }}</p>
          <div class="info">
            <span>{{ avaliacao.questoes }} questões</span>
            <span>{{ avaliacao.duracao }} minutos</span>
          </div>
          <div class="nota" *ngIf="avaliacao.nota">
            <strong>Nota: {{ avaliacao.nota }}/10</strong>
          </div>
          <button *ngIf="avaliacao.status === 'disponivel'" class="btn-primary">
            Iniciar Avaliação
          </button>
          <button *ngIf="avaliacao.status === 'concluida'" class="btn-secondary">
            Ver Resultado
          </button>
          <button *ngIf="avaliacao.status === 'bloqueada'" class="btn-disabled" disabled>
            Bloqueada
          </button>
        </div>
      </div>

      <a routerLink="/dashboard" class="back-link">← Voltar ao Dashboard</a>
    </div>
  `,
  styles: [`
    .avaliacao-page {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
    .avaliacoes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .avaliacao-card {
      background: white;
      border-radius: 8px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      position: relative;
    }
    .status {
      position: absolute;
      top: 16px;
      right: 16px;
      font-size: 20px;
    }
    .avaliacao-card h3 {
      margin: 0 0 10px 0;
      color: #667eea;
      font-size: 14px;
      text-transform: uppercase;
    }
    .avaliacao-card p {
      margin: 0 0 15px 0;
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }
    .info {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
    }
    .info span {
      color: #666;
      font-size: 14px;
    }
    .nota {
      background: #4caf50;
      color: white;
      padding: 8px;
      border-radius: 4px;
      text-align: center;
      margin-bottom: 15px;
    }
    button {
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
    .btn-primary {
      background: #667eea;
      color: white;
    }
    .btn-primary:hover {
      background: #5568d3;
    }
    .btn-secondary {
      background: #4caf50;
      color: white;
    }
    .btn-secondary:hover {
      background: #45a049;
    }
    .btn-disabled {
      background: #e0e0e0;
      color: #999;
      cursor: not-allowed;
    }
    .back-link {
      display: inline-block;
      color: #667eea;
      text-decoration: none;
      font-size: 16px;
    }
    .back-link:hover {
      text-decoration: underline;
    }
  `]
})
export class AvaliacaoComponent {
  avaliacoes = [
    {
      curso: 'Introdução ao Angular',
      titulo: 'Avaliação Final - Módulo 1',
      questoes: 10,
      duracao: 30,
      status: 'concluida',
      nota: 8.5
    },
    {
      curso: 'TypeScript Avançado',
      titulo: 'Avaliação Intermediária',
      questoes: 15,
      duracao: 45,
      status: 'disponivel'
    },
    {
      curso: 'Arquitetura de Software',
      titulo: 'Avaliação Final',
      questoes: 20,
      duracao: 60,
      status: 'bloqueada'
    }
  ];
}
