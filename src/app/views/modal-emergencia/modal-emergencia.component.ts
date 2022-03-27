import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-modal-emergencia',
  templateUrl: './modal-emergencia.component.html',
  styleUrls: ['./modal-emergencia.component.css'],
})
export class ModalEmergenciaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  Entrar() {
    this.router.navigate(['anamnese']);
    this.dialogRef.close();
  }

  Cancelar() {
    localStorage.clear();
    this.router.navigate(['senha']);
    this.dialogRef.close();
  }
}
