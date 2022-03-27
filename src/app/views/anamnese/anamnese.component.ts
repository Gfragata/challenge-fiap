import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormClientComponent } from '../form-client/form-client.component';

@Component({
  selector: 'app-anamnese',
  templateUrl: './anamnese.component.html',
  styleUrls: ['./anamnese.component.css'],
})
export class AnamneseComponent implements OnInit {
  formAnamnese!: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formAnamnese = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      dorBracoEsquerdo: new FormControl(false),
      fadiga: new FormControl(false),
      tontura: new FormControl(false),
      suorFrio: new FormControl(false),
      desconfortoBraco: new FormControl(false),
      desconfortoPescoco: new FormControl(false),
      faltaAr: new FormControl(false),
      palpitacoes: new FormControl(false),
      pressaoPeito: new FormControl(false),
    });
  }

  async saveForm() {
    if (this.formAnamnese.valid) {
      localStorage.clear();
      if (
        this.formAnamnese.value.desconfortoBraco &&
        this.formAnamnese.value.palpitacoes &&
        this.formAnamnese.value.pressaoPeito &&
        this.formAnamnese.value.fadiga &&
        this.formAnamnese.value.faltaAr
      ) {
        localStorage.setItem('infartando', 'true');
      }
      this.router.navigate(['senha']);
    } else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Informe o nome', 'Fechar');
  }

  async voltar() {
    this.router.navigate(['emergencia']);
  }
}
