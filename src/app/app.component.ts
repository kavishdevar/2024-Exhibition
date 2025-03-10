import { ChangeDetectionStrategy, Component, inject, Input, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { inject as injectanalytics} from "@vercel/analytics" 

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatExpansionModule, MatListModule, MatButtonModule, MatIconModule, CdkScrollable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  musicPlaying = true;
  readonly dialog = inject(MatDialog);
  title = '2024Exhibition';
  showMap(room: string, grade: string, subject: string) {
    this.dialog.open(MapDialog, { data: { room, grade, subject } });
  };
  constructor() {
    injectanalytics();
  }
  toggleMusic() {
    const audio = document.querySelector('audio') as HTMLAudioElement;
    audio.paused ? audio.play() : audio.pause();
    this.musicPlaying = !this.musicPlaying;
  }
  fab = document.querySelector('.fab');
}

export interface DialogData {
  room: string;
  grade: string;
  subject: string;
}

@Component({
  selector: 'map-dialog',
  templateUrl: 'map-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapDialog {
  readonly dialogref = inject(MatDialogRef<MapDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly room = this.data.room;
  readonly grade = this.data.grade;
  readonly subject = this.data.subject;
}