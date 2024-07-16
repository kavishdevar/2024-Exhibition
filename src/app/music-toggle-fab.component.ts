import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'music-toggle-fab',
    template: `
        <button mat-icon-button (click)="toggleMusic()">
        <mat-icon>{{ icon }}</mat-icon>
        </button>
    `,
    imports: [MatIconModule, MatButtonModule],
    standalone: true,
    styles: `
        button {
            --mdc-icon-button-icon-color: rgb(60 255 43 / 80%);
            background-color: rgb(0 0 0 / 69%);
        }
    `
})
export class MusicToggleFab {
    icon = 'music_note';
    musicPlaying = false;
    toggleMusic() {
        this.musicPlaying = !this.musicPlaying;
	if (this.musicPlaying){(document.querySelector('audio') as HTMLAudioElement).play()}
        this.icon = this.musicPlaying ? 'music_off' : 'music_note';
        (document.querySelector('audio') as HTMLAudioElement).muted = !this.musicPlaying;
    }
}
