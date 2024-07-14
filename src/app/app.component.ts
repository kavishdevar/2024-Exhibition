import { ChangeDetectionStrategy, Component, inject, Input, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatExpansionModule, MatListModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  readonly dialog = inject(MatDialog);
  title = '2024Exhibition';
  showMap(room: string, grade: string, subject: string) {
    this.dialog.open(MapDialog, { data: { room, grade, subject } });
  };
  // accordion = viewChild.required(MatAccordion);
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