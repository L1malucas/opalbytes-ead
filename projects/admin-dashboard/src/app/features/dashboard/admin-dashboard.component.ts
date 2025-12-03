import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="admin-dashboard">
      <aside class="sidebar">
        <div class="logo">
          <h2>🎓 OPALBYTES</h2>
          <p>Admin Panel</p>
        </div>
        <nav>
          <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            📊 Dashboard
          </a>
          <a routerLink="/cursos" routerLinkActive="active">
            📚 Gestão de Cursos
          </a>
          <a routerLink="/alunos" routerLinkActive="active">
            👥 Gestão de Alunos
          </a>
          <a routerLink="/relatorios" routerLinkActive="active">
            📈 Relatórios
          </a>
        </nav>
      </aside>

      <main class="main-content">
        <header class="header">
          <h1>Dashboard Administrativo</h1>
          <button class="btn-logout">Sair</button>
        </header>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-info">
              <h3>Total de Alunos</h3>
              <p class="stat-number">1,234</p>
              <span class="stat-change positive">+12% vs mês anterior</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-info">
              <h3>Cursos Ativos</h3>
              <p class="stat-number">45</p>
              <span class="stat-change">3 novos este mês</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">✅</div>
            <div class="stat-info">
              <h3>Certificados Emitidos</h3>
              <p class="stat-number">567</p>
              <span class="stat-change positive">+8% vs mês anterior</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-info">
              <h3>Horas Estudadas</h3>
              <p class="stat-number">12,456</p>
              <span class="stat-change positive">+15% vs mês anterior</span>
            </div>
          </div>
        </div>

        <div class="charts-row">
          <div class="chart-card">
            <h3>📈 Evolução de Matrículas</h3>
            <div class="chart-placeholder">
              <p>Gráfico de evolução mensal de matrículas</p>
            </div>
          </div>

          <div class="chart-card">
            <h3>🎯 Taxa de Conclusão por Curso</h3>
            <div class="chart-placeholder">
              <p>Gráfico de barras com taxa de conclusão</p>
            </div>
          </div>
        </div>

        <div class="recent-activity">
          <h3>Atividades Recentes</h3>
          <div class="activity-list">
            <div class="activity-item" *ngFor="let activity of recentActivities">
              <span class="activity-icon">{{ activity.icon }}</span>
              <div class="activity-info">
                <p><strong>{{ activity.title }}</strong></p>
                <small>{{ activity.time }}</small>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      display: flex;
      min-height: 100vh;
      background: #f5f5f5;
    }
    .sidebar {
      width: 260px;
      background: #1a237e;
      color: white;
      padding: 0;
      position: fixed;
      height: 100vh;
      overflow-y: auto;
    }
    .logo {
      padding: 30px 20px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .logo h2 {
      margin: 0 0 5px 0;
      font-size: 20px;
    }
    .logo p {
      margin: 0;
      opacity: 0.7;
      font-size: 12px;
    }
    .sidebar nav {
      padding: 20px 0;
    }
    .sidebar nav a {
      display: block;
      padding: 15px 20px;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      transition: all 0.3s;
      border-left: 3px solid transparent;
    }
    .sidebar nav a:hover, .sidebar nav a.active {
      background: rgba(255,255,255,0.1);
      color: white;
      border-left-color: #7c4dff;
    }
    .main-content {
      margin-left: 260px;
      flex: 1;
      padding: 30px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .header h1 {
      margin: 0;
      color: #333;
      font-size: 28px;
    }
    .btn-logout {
      background: white;
      border: 1px solid #ddd;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-logout:hover {
      background: #f5f5f5;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .stat-card {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      gap: 16px;
    }
    .stat-icon {
      font-size: 40px;
    }
    .stat-info h3 {
      margin: 0 0 8px 0;
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
    .stat-number {
      margin: 0 0 8px 0;
      color: #333;
      font-size: 28px;
      font-weight: 700;
    }
    .stat-change {
      font-size: 12px;
      color: #666;
    }
    .stat-change.positive {
      color: #4caf50;
    }
    .charts-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .chart-card {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .chart-card h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 16px;
    }
    .chart-placeholder {
      height: 200px;
      background: #f5f5f5;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }
    .recent-activity {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .recent-activity h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 16px;
    }
    .activity-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .activity-item {
      display: flex;
      gap: 12px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    .activity-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .activity-icon {
      font-size: 24px;
    }
    .activity-info p {
      margin: 0 0 4px 0;
      color: #333;
    }
    .activity-info small {
      color: #999;
      font-size: 12px;
    }
  `]
})
export class AdminDashboardComponent {
  recentActivities = [
    { icon: '✅', title: 'Novo aluno matriculado: João Silva', time: 'há 5 minutos' },
    { icon: '📚', title: 'Curso "Angular Avançado" foi publicado', time: 'há 1 hora' },
    { icon: '🎓', title: '15 certificados foram emitidos', time: 'há 2 horas' },
    { icon: '💬', title: 'Nova mensagem de tutoria respondida', time: 'há 3 horas' }
  ];
}
