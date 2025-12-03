import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pre-inscricao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pre-inscricao-page">
      <h1>Pré-inscrição</h1>
      <form (ngSubmit)="onSubmit()" #form="ngForm">
        <div class="form-group">
          <label for="nome">Nome Completo</label>
          <input type="text" id="nome" name="nome" [(ngModel)]="dados.nome" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" [(ngModel)]="dados.email" required>
        </div>
        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" [(ngModel)]="dados.telefone" required>
        </div>
        <div class="form-group">
          <label for="curso">Curso de Interesse</label>
          <select id="curso" name="curso" [(ngModel)]="dados.curso" required>
            <option value="">Selecione um curso</option>
            <option value="angular">Introdução ao Angular</option>
            <option value="typescript">TypeScript Avançado</option>
            <option value="arquitetura">Arquitetura de Software</option>
          </select>
        </div>
        <button type="submit" [disabled]="!form.valid">Enviar Pré-inscrição</button>
      </form>
      <a routerLink="/">Voltar</a>
    </div>
  `,
  styles: [`
    .pre-inscricao-page {
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 30px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #333;
    }
    input, select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
    button {
      background: #1976d2;
      color: white;
      padding: 12px 30px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    button:not(:disabled):hover {
      background: #1565c0;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      color: #1976d2;
      text-decoration: none;
    }
  `]
})
export class PreInscricaoComponent {
  dados = {
    nome: '',
    email: '',
    telefone: '',
    curso: ''
  };

  onSubmit() {
    console.log('Pré-inscrição enviada:', this.dados);
    alert('Pré-inscrição enviada com sucesso!');
  }
}
