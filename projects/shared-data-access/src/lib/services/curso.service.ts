import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = '/api/cursos';

  constructor(private http: HttpClient) {}

  listarCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obterCurso(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  registrarProgresso(moduloId: string, progresso: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/progresso`, { moduloId, progresso });
  }
}
