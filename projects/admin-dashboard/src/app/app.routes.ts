import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './features/dashboard/admin-dashboard.component';
import { GestaoCursosComponent } from './features/gestao-cursos/gestao-cursos.component';
import { GestaoAlunosComponent } from './features/gestao-alunos/gestao-alunos.component';
import { RelatoriosComponent } from './features/relatorios/relatorios.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'cursos', component: GestaoCursosComponent },
  { path: 'alunos', component: GestaoAlunosComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: '**', redirectTo: '/dashboard' }
];
