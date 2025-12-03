import { Component } from '@angular/core';
import { CursoService } from '@opalbytes/shared/data-access';
import { Curso } from '@opalbytes/shared/models';
import { VideoPlayer } from '@opalbytes/feature-video-player';

@Component({
  selector: 'app-curso-video',
  standalone: true,
  imports: [VideoPlayer],
  template: `
    <div class="video-container">
      <h2>Assistir Curso</h2>
      <opb-video-player
        [moduloId]="moduloId"
        (progresso)="onProgresso($event)">
      </opb-video-player>
    </div>
  `,
  styles: [`
    .video-container {
      padding: 20px;
    }
  `]
})
export class CursoVideoComponent {
  moduloId = 'modulo-123';
  curso?: Curso;

  constructor(private cursoService: CursoService) {}

  onProgresso(evento: any): void {
    this.cursoService.registrarProgresso(this.moduloId, evento.progresso).subscribe({
      next: () => console.log('Progresso registrado'),
      error: (err) => console.error('Erro ao registrar progresso', err)
    });
  }
}
