import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="catalogo-page">
      <h1>Catálogo de Cursos</h1>
      <div class="cursos-grid">
        <div class="curso-card" *ngFor="let curso of cursos">
          <h3>{{ curso.nome }}</h3>
          <p>{{ curso.descricao }}</p>
          <span class="carga-horaria">{{ curso.cargaHoraria }}h</span>
        </div>
      </div>
      <a routerLink="/">Voltar</a>
    </div>
  `,
  styles: [`
    .catalogo-page {
      padding: 40px;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 30px;
    }
    .cursos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .curso-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
    }
    .curso-card h3 {
      margin-top: 0;
      color: #333;
    }
    .carga-horaria {
      display: inline-block;
      background: #1976d2;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
    }
    a {
      color: #1976d2;
      text-decoration: none;
    }
  `]
})
export class CatalogoComponent {
  cursos = [
    { nome: 'Introdução ao Angular', descricao: 'Aprenda os fundamentos do Angular', cargaHoraria: 40 },
    { nome: 'TypeScript Avançado', descricao: 'Domine TypeScript', cargaHoraria: 30 },
    { nome: 'Arquitetura de Software', descricao: 'Padrões e boas práticas', cargaHoraria: 60 }
  ];
}
