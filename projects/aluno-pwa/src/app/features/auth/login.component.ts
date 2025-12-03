import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-page">
      <div class="login-card">
        <h1>Login - Área do Aluno</h1>
        <form (ngSubmit)="onLogin()" #form="ngForm">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" [(ngModel)]="credentials.email" required>
          </div>
          <div class="form-group">
            <label for="senha">Senha</label>
            <input type="password" id="senha" name="senha" [(ngModel)]="credentials.senha" required>
          </div>
          <button type="submit" [disabled]="!form.valid">Entrar</button>
        </form>
        <p class="info">Use qualquer e-mail/senha para fazer login (demo)</p>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    .login-card {
      background: white;
      padding: 40px;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      width: 100%;
      max-width: 400px;
    }
    h1 {
      margin-top: 0;
      color: #333;
      font-size: 24px;
      margin-bottom: 30px;
      text-align: center;
    }
    .form-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
      font-weight: 500;
    }
    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
    button {
      width: 100%;
      background: #667eea;
      color: white;
      padding: 14px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    }
    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
    button:not(:disabled):hover {
      background: #5568d3;
    }
    .info {
      text-align: center;
      margin-top: 20px;
      color: #666;
      font-size: 12px;
    }
  `]
})
export class LoginComponent {
  credentials = {
    email: '',
    senha: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login:', this.credentials);
    // Simula login bem-sucedido
    this.router.navigate(['/dashboard']);
  }
}
