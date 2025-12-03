import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard">
      <header class="header">
        <h1>Dashboard - Área do Aluno</h1>
        <button (click)="logout()">Sair</button>
      </header>

      <nav class="nav">
        <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          🏠 Início
        </a>
        <a routerLink="/curso" routerLinkActive="active">
          📚 Meus Cursos
        </a>
        <a routerLink="/avaliacao" routerLinkActive="active">
          📝 Avaliações
        </a>
        <a routerLink="/tutoria" routerLinkActive="active">
          💬 Tutoria
        </a>
      </nav>

      <main class="content">
        <h2>Bem-vindo(a) ao Portal EAD</h2>

        <div class="cards-grid">
          <div class="card">
            <h3>📊 Progresso</h3>
            <p>Você completou <strong>3 de 5</strong> cursos</p>
            <div class="progress-bar">
              <div class="progress" style="width: 60%"></div>
            </div>
          </div>

          <div class="card">
            <h3>🎯 Próxima Avaliação</h3>
            <p><strong>Arquitetura de Software</strong></p>
            <p class="small">Disponível até 15/12/2025</p>
          </div>

          <div class="card">
            <h3>💬 Mensagens</h3>
            <p><strong>2 novas mensagens</strong> do tutor</p>
            <a routerLink="/tutoria">Ver mensagens</a>
          </div>

          <div class="card">
            <h3>⏱️ Tempo de Estudo</h3>
            <p><strong>12h 30min</strong> esta semana</p>
            <p class="small">+15% vs semana anterior</p>
          </div>
        </div>

        <div class="cursos-andamento">
          <h3>Cursos em Andamento</h3>
          <div class="curso-item" *ngFor="let curso of cursosAndamento">
            <div class="curso-info">
              <h4>{{ curso.nome }}</h4>
              <p>{{ curso.progresso }}% concluído</p>
            </div>
            <button routerLink="/curso">Continuar</button>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .dashboard {
      min-height: 100vh;
      background: #f5f5f5;
    }
    .header {
      background: #667eea;
      color: white;
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .header button {
      background: rgba(255,255,255,0.2);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .header button:hover {
      background: rgba(255,255,255,0.3);
    }
    .nav {
      background: white;
      padding: 0 40px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      gap: 30px;
    }
    .nav a {
      padding: 20px 0;
      text-decoration: none;
      color: #666;
      border-bottom: 3px solid transparent;
      transition: all 0.3s;
    }
    .nav a:hover, .nav a.active {
      color: #667eea;
      border-bottom-color: #667eea;
    }
    .content {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .content h2 {
      margin-top: 0;
      color: #333;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;
    }
    .card {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .card h3 {
      margin-top: 0;
      color: #333;
      font-size: 16px;
    }
    .card p {
      color: #666;
      margin: 10px 0;
    }
    .card .small {
      font-size: 12px;
      color: #999;
    }
    .card a {
      color: #667eea;
      text-decoration: none;
      font-size: 14px;
    }
    .progress-bar {
      background: #e0e0e0;
      height: 8px;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 10px;
    }
    .progress {
      background: #667eea;
      height: 100%;
      transition: width 0.3s;
    }
    .cursos-andamento {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin-top: 30px;
    }
    .cursos-andamento h3 {
      margin-top: 0;
      color: #333;
    }
    .curso-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .curso-item h4 {
      margin: 0 0 5px 0;
      color: #333;
    }
    .curso-item p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }
    .curso-item button {
      background: #667eea;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .curso-item button:hover {
      background: #5568d3;
    }
  `]
})
export class DashboardComponent {
  cursosAndamento = [
    { nome: 'Introdução ao Angular', progresso: 75 },
    { nome: 'TypeScript Avançado', progresso: 45 },
  ];

  logout() {
    console.log('Logout');
    // Navegar para login
  }
}
