import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CursoVideoComponent } from './features/curso/video.component';
import { AvaliacaoComponent } from './features/avaliacao/avaliacao.component';
import { TutoriaComponent } from './features/tutoria/tutoria.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'curso', component: CursoVideoComponent },
  { path: 'avaliacao', component: AvaliacaoComponent },
  { path: 'tutoria', component: TutoriaComponent },
  { path: '**', redirectTo: '/login' }
];
