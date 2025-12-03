import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PreInscricaoComponent } from './pages/pre-inscricao/pre-inscricao.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'pre-inscricao', component: PreInscricaoComponent },
  { path: '**', redirectTo: '' }
];
