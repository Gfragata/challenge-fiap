import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/Login';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CadastroLoginComponent } from '../cadastro-login/cadastro-login.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
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

  async GetLogin() {
    if (this.formLogin.status != 'INVALID') {
      if (this.formLogin.value.username.includes('@moinhoventos')) {
        console.log(this.formLogin.value.username);
        this.router.navigate(['lista']);
      } else {
        this.router.navigate(['emergencia']);
      }
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('E-mail e/ou senha invalido', 'Fechar');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroLoginComponent, {
      width: '500px',
      height: '470px',
    });

    dialogRef.afterClosed().subscribe();
  }
  createAccount() {
    this.openDialog();
  }
}
