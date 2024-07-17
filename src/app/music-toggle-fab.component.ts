import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'music-toggle-fab',
    template: `
        <button mat-icon-button (click)="toggleMusic()" class="playing fab"
            matTooltip = "{{ toolTipText }}"
          [matTooltipPosition]="left"
          matTooltipHideDelay="100000"
        >
            <mat-icon>
            {{ icon }}
            </mat-icon>
        </button>
    `,
    imports: [MatIconModule, MatButtonModule, MatTooltipModule],
    standalone: true,
    styles: `
        button {
            --mdc-icon-button-icon-color: rgb(60 255 43 / 80%);
            background-color: rgb(0 0 0 / 69%);
        }
        .playing {
            background-color: rgb(3 48 0 / 1);
            --mdc-icon-button-icon-color: rgb(255, 255, 255);
        }
    `
})
export class MusicToggleFab {
    positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
    left = this.positionOptions[3];
    icon = 'music_note';
    musicPlaying = true;
    toolTipText = this.musicPlaying ? 'Pause Music' : 'Play Music';
    toggleMusic() {
        this.musicPlaying = !this.musicPlaying;
        if (this.musicPlaying) { (document.querySelector('audio') as HTMLAudioElement).play() }
        this.icon = this.musicPlaying ? 'music_note' : 'music_off';
        (document.querySelector('audio') as HTMLAudioElement).muted = !this.musicPlaying;
        this.toolTipText = this.musicPlaying ? 'Pause Music' : 'Play Music';
        document.querySelector('.fab')?.classList.toggle('playing');
    }
}
