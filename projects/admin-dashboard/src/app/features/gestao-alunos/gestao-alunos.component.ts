import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestao-alunos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gestao-alunos">
      <div class="page-header">
        <h1>👥 Gestão de Alunos</h1>
        <button class="btn-primary">+ Novo Aluno</button>
      </div>

      <div class="filters">
        <input type="text" placeholder="Buscar por nome ou e-mail..." class="search-input">
        <select class="filter-select">
          <option value="">Todos os Cursos</option>
          <option value="angular">Introdução ao Angular</option>
          <option value="typescript">TypeScript Avançado</option>
        </select>
      </div>

      <div class="alunos-table">
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>E-mail</th>
              <th>Cursos Matriculados</th>
              <th>Progresso Geral</th>
              <th>Última Atividade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let aluno of alunos">
              <td>
                <div class="aluno-info">
                  <div class="avatar">{{ aluno.nome[0] }}</div>
                  <strong>{{ aluno.nome }}</strong>
                </div>
              </td>
              <td>{{ aluno.email }}</td>
              <td>{{ aluno.cursosMatriculados }}</td>
              <td>
                <div class="progress-container">
                  <div class="progress-bar">
                    <div class="progress" [style.width.%]="aluno.progresso"></div>
                  </div>
                  <span>{{ aluno.progresso }}%</span>
                </div>
              </td>
              <td>{{ aluno.ultimaAtividade }}</td>
              <td>
                <span class="status" [class.ativo]="aluno.ativo">
                  {{ aluno.ativo ? 'Ativo' : 'Inativo' }}
                </span>
              </td>
              <td>
                <div class="actions">
                  <button class="btn-icon" title="Ver Perfil">👤</button>
                  <button class="btn-icon" title="Editar">✏️</button>
                  <button class="btn-icon" title="Mensagens">💬</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .gestao-alunos {
      padding: 30px;
    }
    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }
    .page-header h1 {
      margin: 0;
      color: #333;
    }
    .btn-primary {
      background: #1a237e;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-primary:hover {
      background: #0d1659;
    }
    .filters {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }
    .search-input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
    .filter-select {
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      min-width: 250px;
    }
    .alunos-table {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th {
      background: #f5f5f5;
      padding: 16px;
      text-align: left;
      font-weight: 600;
      color: #666;
      font-size: 14px;
      border-bottom: 2px solid #e0e0e0;
    }
    td {
      padding: 16px;
      border-bottom: 1px solid #f0f0f0;
    }
    tr:hover {
      background: #fafafa;
    }
    .aluno-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #1a237e;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    .aluno-info strong {
      color: #333;
    }
    .progress-container {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .progress-bar {
      flex: 1;
      height: 8px;
      background: #e0e0e0;
      border-radius: 4px;
      overflow: hidden;
      max-width: 150px;
    }
    .progress {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      transition: width 0.3s;
    }
    .progress-container span {
      font-size: 12px;
      color: #666;
      min-width: 40px;
    }
    .status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      background: #ffebee;
      color: #c62828;
    }
    .status.ativo {
      background: #e8f5e9;
      color: #2e7d32;
    }
    .actions {
      display: flex;
      gap: 8px;
    }
    .btn-icon {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 18px;
      padding: 4px;
      opacity: 0.6;
      transition: opacity 0.2s;
    }
    .btn-icon:hover {
      opacity: 1;
    }
  `]
})
export class GestaoAlunosComponent {
  alunos = [
    { nome: 'João Silva', email: 'joao@example.com', cursosMatriculados: 3, progresso: 75, ultimaAtividade: '2 horas atrás', ativo: true },
    { nome: 'Maria Santos', email: 'maria@example.com', cursosMatriculados: 2, progresso: 45, ultimaAtividade: '1 dia atrás', ativo: true },
    { nome: 'Pedro Oliveira', email: 'pedro@example.com', cursosMatriculados: 4, progresso: 90, ultimaAtividade: '30 minutos atrás', ativo: true },
    { nome: 'Ana Costa', email: 'ana@example.com', cursosMatriculados: 1, progresso: 20, ultimaAtividade: '1 semana atrás', ativo: false }
  ];
}
