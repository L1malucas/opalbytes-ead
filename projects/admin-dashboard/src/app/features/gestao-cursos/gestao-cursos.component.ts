import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gestao-cursos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="gestao-cursos">
      <div class="page-header">
        <h1>📚 Gestão de Cursos</h1>
        <button class="btn-primary">+ Novo Curso</button>
      </div>

      <div class="filters">
        <input type="text" placeholder="Buscar cursos..." class="search-input">
        <select class="filter-select">
          <option value="">Todos os Status</option>
          <option value="ativo">Ativos</option>
          <option value="rascunho">Rascunhos</option>
          <option value="arquivado">Arquivados</option>
        </select>
      </div>

      <div class="cursos-table">
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Alunos</th>
              <th>Módulos</th>
              <th>Status</th>
              <th>Conclusão Média</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let curso of cursos">
              <td>
                <div class="curso-info">
                  <strong>{{ curso.nome }}</strong>
                  <small>{{ curso.cargaHoraria }}h</small>
                </div>
              </td>
              <td>{{ curso.alunos }}</td>
              <td>{{ curso.modulos }}</td>
              <td>
                <span class="status" [class]="curso.status">
                  {{ curso.status }}
                </span>
              </td>
              <td>{{ curso.conclusao }}%</td>
              <td>
                <div class="actions">
                  <button class="btn-icon" title="Editar">✏️</button>
                  <button class="btn-icon" title="Ver Detalhes">👁️</button>
                  <button class="btn-icon" title="Arquivar">📦</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .gestao-cursos {
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
      min-width: 200px;
    }
    .cursos-table {
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
    .curso-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .curso-info strong {
      color: #333;
    }
    .curso-info small {
      color: #999;
      font-size: 12px;
    }
    .status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }
    .status.ativo {
      background: #e8f5e9;
      color: #2e7d32;
    }
    .status.rascunho {
      background: #fff3e0;
      color: #ef6c00;
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
export class GestaoCursosComponent {
  cursos = [
    { nome: 'Introdução ao Angular', cargaHoraria: 40, alunos: 234, modulos: 8, status: 'ativo', conclusao: 78 },
    { nome: 'TypeScript Avançado', cargaHoraria: 30, alunos: 189, modulos: 6, status: 'ativo', conclusao: 65 },
    { nome: 'Arquitetura de Software', cargaHoraria: 60, alunos: 156, modulos: 12, status: 'ativo', conclusao: 42 },
    { nome: 'React Fundamentals', cargaHoraria: 35, alunos: 0, modulos: 7, status: 'rascunho', conclusao: 0 }
  ];
}
