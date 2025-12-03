import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-page">
      <h1>Bem-vindo ao OPALBYTES EAD</h1>
      <p>Plataforma de Educação a Distância</p>
      <nav>
        <a routerLink="/catalogo">Ver Catálogo de Cursos</a> |
        <a routerLink="/pre-inscricao">Fazer Pré-inscrição</a>
      </nav>
    </div>
  `,
  styles: [`
    .home-page {
      padding: 40px;
      text-align: center;
    }
    h1 {
      color: #1976d2;
      margin-bottom: 20px;
    }
    nav {
      margin-top: 30px;
    }
    a {
      margin: 0 15px;
      color: #1976d2;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class HomeComponent {}
