import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

export interface ModalData {
  id: number;
  nome: string;
  matricula: number;
  cpf: string;
  rg: string;
  telefone: string;
  dataNascimento: string;
  contatoEmergencia: string;
  telefoneEmergencia: string;
  numeroCarteirinha: string;
  convenio: string;
  validadeCarteirinha: string;
  email: string;
  envioNotificacao: boolean;
  sexo: string;
}

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent implements OnInit {
  formCliente!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private http: HttpClient,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCliente = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      rg: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl(this.data, [Validators.required]),
      contatoEmergencia: new FormControl('', [Validators.required]),
      telefoneEmergencia: new FormControl('', [Validators.required]),
      convenio: new FormControl('', [Validators.required]),
      numeroCarteirinha: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      envioNotificacao: new FormControl(true, [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
    });
    if (this.data.id) this.loadForm();
  }

  loadForm() {
    this.formCliente.patchValue({
      id: this.data.id,
      nome: this.data.nome,
      cpf: this.data.cpf,
      rg: this.data.rg,
      telefone: this.data.telefone,
      dataNascimento: this.data.dataNascimento,
      contatoEmergencia: this.data.contatoEmergencia,
      telefoneEmergencia: this.data.telefoneEmergencia,
      convenio: this.data.convenio,
      numeroCarteirinha: this.data.numeroCarteirinha,
      validadeCarteirinha: this.data.validadeCarteirinha,
      email: this.data.email,
      envioNotificacao: this.data.envioNotificacao,
      sexo: this.data.sexo,
    });
  }

  openSnackBar() {
    this._snackBar.open('Campos obrigatorios não foram preenchidos', 'Fechar');
  }

  async saveForm() {
    if (this.formCliente.valid) {
      this.dialogRef.close(this.formCliente.value);
    } else {
      this.openSnackBar();
    }
  }

  async close() {
    this.dialogRef.close();
  }
}
