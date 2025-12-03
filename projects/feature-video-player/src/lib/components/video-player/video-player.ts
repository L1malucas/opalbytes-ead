import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'opb-video-player',
  imports: [],
  templateUrl: './video-player.html',
  styleUrl: './video-player.css',
})
export class VideoPlayer {
  @Input() moduloId!: string;
  @Output() progresso = new EventEmitter<any>();

  onProgressoChange(evento: any): void {
    this.progresso.emit(evento);
  }
}
