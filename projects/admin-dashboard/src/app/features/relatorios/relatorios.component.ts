import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relatorios">
      <h1>📈 Relatórios e Analytics</h1>

      <div class="filters-section">
        <div class="filter-group">
          <label>Período</label>
          <select class="filter-select">
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
            <option>Últimos 3 meses</option>
            <option>Último ano</option>
          </select>
        </div>
        <button class="btn-export">📥 Exportar Relatório</button>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <h3>Engajamento Geral</h3>
          <div class="metric-value">87%</div>
          <p class="metric-subtitle">Taxa de engajamento dos alunos</p>
        </div>

        <div class="metric-card">
          <h3>Taxa de Conclusão</h3>
          <div class="metric-value">62%</div>
          <p class="metric-subtitle">Alunos que completaram cursos</p>
        </div>

        <div class="metric-card">
          <h3>Satisfação</h3>
          <div class="metric-value">4.8/5</div>
          <p class="metric-subtitle">Avaliação média dos cursos</p>
        </div>

        <div class="metric-card">
          <h3>Tempo Médio</h3>
          <div class="metric-value">3.2h</div>
          <p class="metric-subtitle">Tempo médio por curso/semana</p>
        </div>
      </div>

      <div class="reports-grid">
        <div class="report-card">
          <h3>📊 Top 5 Cursos Mais Acessados</h3>
          <div class="ranking-list">
            <div class="ranking-item" *ngFor="let curso of topCursos; let i = index">
              <span class="rank">{{ i + 1 }}</span>
              <div class="ranking-info">
                <strong>{{ curso.nome }}</strong>
                <div class="progress-bar">
                  <div class="progress" [style.width.%]="curso.acessos"></div>
                </div>
              </div>
              <span class="value">{{ curso.acessos }}%</span>
            </div>
          </div>
        </div>

        <div class="report-card">
          <h3>🎯 Performance por Categoria</h3>
          <div class="category-list">
            <div class="category-item" *ngFor="let cat of categorias">
              <div class="category-header">
                <span class="category-name">{{ cat.nome }}</span>
                <span class="category-value">{{ cat.conclusao }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress" [style.width.%]="cat.conclusao"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="chart-section">
        <h3>📈 Evolução de Métricas</h3>
        <div class="chart-placeholder">
          <p>Gráfico de linha mostrando evolução temporal de matrículas, conclusões e certificados emitidos</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .relatorios {
      padding: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
    .filters-section {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .filter-group label {
      display: block;
      margin-bottom: 8px;
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
    .filter-select {
      padding: 10px 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      min-width: 200px;
    }
    .btn-export {
      background: #1a237e;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-export:hover {
      background: #0d1659;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .metric-card {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .metric-card h3 {
      margin: 0 0 12px 0;
      color: #666;
      font-size: 14px;
      font-weight: 500;
    }
    .metric-value {
      font-size: 36px;
      font-weight: 700;
      color: #1a237e;
      margin-bottom: 8px;
    }
    .metric-subtitle {
      margin: 0;
      color: #999;
      font-size: 12px;
    }
    .reports-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .report-card {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .report-card h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 16px;
    }
    .ranking-list, .category-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .ranking-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .rank {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #1a237e;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }
    .ranking-info {
      flex: 1;
      min-width: 0;
    }
    .ranking-info strong {
      display: block;
      color: #333;
      margin-bottom: 6px;
    }
    .value {
      color: #666;
      font-weight: 600;
      font-size: 14px;
    }
    .progress-bar {
      height: 6px;
      background: #e0e0e0;
      border-radius: 3px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s;
    }
    .category-item {
      margin-bottom: 12px;
    }
    .category-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }
    .category-name {
      color: #333;
      font-weight: 500;
    }
    .category-value {
      color: #1a237e;
      font-weight: 600;
    }
    .chart-section {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .chart-section h3 {
      margin: 0 0 20px 0;
      color: #333;
      font-size: 16px;
    }
    .chart-placeholder {
      height: 300px;
      background: #f5f5f5;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
      padding: 40px;
      text-align: center;
    }
  `]
})
export class RelatoriosComponent {
  topCursos = [
    { nome: 'Introdução ao Angular', acessos: 95 },
    { nome: 'TypeScript Avançado', acessos: 82 },
    { nome: 'Arquitetura de Software', acessos: 78 },
    { nome: 'React Fundamentals', acessos: 65 },
    { nome: 'Node.js Essentials', acessos: 58 }
  ];

  categorias = [
    { nome: 'Frontend Development', conclusao: 85 },
    { nome: 'Backend Development', conclusao: 72 },
    { nome: 'DevOps', conclusao: 68 },
    { nome: 'Mobile Development', conclusao: 61 }
  ];
}
