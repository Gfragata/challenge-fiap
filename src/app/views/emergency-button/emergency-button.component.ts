import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalEmergenciaComponent } from '../modal-emergencia/modal-emergencia.component';

@Component({
  selector: 'app-emergency-button',
  templateUrl: './emergency-button.component.html',
  styleUrls: ['./emergency-button.component.css'],
})
export class EmergencyButtonComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  onClick() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalEmergenciaComponent, {
      width: '500px',
      height: '330px',
    });

    dialogRef.afterClosed().subscribe();
  }
}
