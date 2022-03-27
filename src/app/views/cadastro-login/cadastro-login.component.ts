import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/Login';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css'],
})
export class CadastroLoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CadastroLoginComponent>,
    private router: Router,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm(new Login());
  }

  createForm(login: Login) {
    this.formLogin = new FormGroup({
      username: new FormControl(login.username, [Validators.email]),
      password: new FormControl(login.password, [Validators.required]),
    });
  }

  async Entrar() {
    if (this.formLogin.status != 'INVALID') {
      try {
        if (this.formLogin.value.username.includes('@moinhoventos')) {
          this.router.navigate(['lista']);
        } else {
          this.router.navigate(['emergencia']);
        }
      } catch (error) {
        console.error(error);
      }
      this.dialogRef.close();
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('E-mail e/ou senha invalido', 'Fechar');
  }

  Cancelar() {
    this.dialogRef.close();
  }
}
