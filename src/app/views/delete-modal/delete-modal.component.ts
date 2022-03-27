import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/Login';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  async Deletar() {
    this.dialogRef.close(true);
  }

  Cancelar() {
    this.dialogRef.close(false);
  }
}
