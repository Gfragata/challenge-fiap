import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { FormClientComponent } from '../form-client/form-client.component';

export interface ClientElement {
  nome: string;
  id: number;
  cpf: string;
  rg: string;
  telefone: string;
  dataNascimento: Date;
  contatoEmergencia: string;
  telefoneEmergencia: string;
  numeroCarteirinha: string;
  convenio: string;
  validadeCarteirinha: Date;
  email: string;
  envioNotificacao: boolean;
  sexo: string;
}

const ELEMENT_DATA: ClientElement[] = [
  {
    id: 1,
    nome: 'Marcos',
    cpf: '637.967.010-60',
    rg: '35.268.455-0',
    telefone: '(85) 99227-7645',
    dataNascimento: new Date(1990, 3, 19),
    contatoEmergencia: 'Andre',
    telefoneEmergencia: '(85) 99537-9029',
    convenio: 'SulAmérica',
    numeroCarteirinha: '184376470520000',
    validadeCarteirinha: new Date(2030, 2, 20),
    email: 'cliente1@gmail.com',
    envioNotificacao: true,
    sexo: 'M',
  },
  {
    id: 2,
    nome: 'Helena',
    cpf: '431.881.780-69',
    rg: '29.640.478-0',
    telefone: '(27) 99876-6687',
    dataNascimento: new Date(1985, 5, 7),
    contatoEmergencia: 'Christian',
    telefoneEmergencia: '(27) 97519-5158',
    convenio: 'Prevent Senior',
    numeroCarteirinha: '285666350010007',
    validadeCarteirinha: new Date(2025, 10, 15),
    email: 'dama_dourada@gmail.com',
    envioNotificacao: false,
    sexo: 'F',
  },
  {
    id: 3,
    nome: 'Flavia',
    cpf: '590.282.270-08',
    rg: '16.625.446-0',
    telefone: '(48) 98975-3371',
    dataNascimento: new Date(1972, 10, 31),
    contatoEmergencia: 'Ricardo',
    telefoneEmergencia: '(48) 97522-5670',
    convenio: 'Amil Assistência Médica',
    numeroCarteirinha: '262410174800001',
    validadeCarteirinha: new Date(2022, 3, 20),
    email: 'princesaGamer@hotmail.com',
    envioNotificacao: true,
    sexo: 'F',
  },
  {
    id: 4,
    nome: 'Gabriel',
    cpf: '161.261.100-13',
    rg: '23.364.458-1',
    telefone: '(11) 98991-5664',
    dataNascimento: new Date(1997, 5, 9),
    contatoEmergencia: 'Evandro',
    telefoneEmergencia: '(11) 97652-2633',
    convenio: 'São Francisco Saúde',
    numeroCarteirinha: '210329164010004',
    validadeCarteirinha: new Date(2030, 9, 25),
    email: 'destruidor@gmail.com',
    envioNotificacao: true,
    sexo: 'M',
  },
  {
    id: 5,
    nome: 'Clayton',
    cpf: '729.355.850-38',
    rg: '24.019.365-9',
    telefone: '(89) 98890-2833',
    dataNascimento: new Date(1993, 8, 15),
    contatoEmergencia: 'João',
    telefoneEmergencia: '(89) 99327-3866',
    convenio: 'Bradesco Seguros',
    numeroCarteirinha: '754006834480009',
    validadeCarteirinha: new Date(2026, 12, 80),
    email: 'guerreiro.vermelho@hotmail.com',
    envioNotificacao: false,
    sexo: 'M',
  },
  {
    id: 6,
    nome: 'Fernanda',
    cpf: '157.988.930-14',
    rg: '12.909.113-3',
    telefone: '(67) 99875-1538',
    dataNascimento: new Date(1970, 12, 1),
    contatoEmergencia: 'Wesley',
    telefoneEmergencia: '(67) 99357-2707',
    convenio: 'Central Nacional Unimed',
    numeroCarteirinha: '204090696470018',
    validadeCarteirinha: new Date(2023, 1, 2),
    email: 'rainha_rosa@gmail.com',
    envioNotificacao: false,
    sexo: 'F',
  },
  {
    id: 7,
    nome: 'Claire',
    cpf: '533.910.450-86',
    rg: '17.874.518-2',
    telefone: '(65) 98972-4839',
    dataNascimento: new Date(1946, 29, 6),
    contatoEmergencia: 'Wesker',
    telefoneEmergencia: '(65) 98822-4651',
    convenio: 'Assim Saúde',
    numeroCarteirinha: '920292354830009',
    validadeCarteirinha: new Date(2025, 5, 20),
    email: 'zombie.girl@hotmail.com',
    envioNotificacao: true,
    sexo: 'F',
  },
  {
    id: 8,
    nome: 'Leon',
    cpf: '485.795.790-66',
    rg: '31.530.265-3',
    telefone: '(68) 99721-1644',
    dataNascimento: new Date(1961, 1, 1),
    contatoEmergencia: 'Ada',
    telefoneEmergencia: '(68) 99229-3147',
    convenio: 'NotreDame Intermédica',
    numeroCarteirinha: '297498074870008',
    validadeCarteirinha: new Date(2030, 8, 10),
    email: 'zombie_boy@icloud.com',
    envioNotificacao: false,
    sexo: 'M',
  },
  {
    id: 9,
    nome: 'Amanda',
    cpf: '005.104.070-05',
    rg: '27.583.786-5',
    telefone: '(84) 96916-7914',
    dataNascimento: new Date(1999, 4, 16),
    contatoEmergencia: 'Felipe',
    telefoneEmergencia: '(84) 97964-6474',
    convenio: 'Hapvida Saúde',
    numeroCarteirinha: '796584698870008',
    validadeCarteirinha: new Date(2024, 2, 3),
    email: 'amanda@hotmail.com',
    envioNotificacao: true,
    sexo: 'F',
  },
  {
    id: 10,
    nome: 'Gustavo',
    cpf: '097.148.480-59',
    rg: '23.910.407-9',
    telefone: '(32) 97948-3257',
    dataNascimento: new Date(2004, 12, 23),
    contatoEmergencia: 'Jenifer',
    telefoneEmergencia: '(32) 98899-1547',
    convenio: '',
    numeroCarteirinha: '',
    validadeCarteirinha: new Date(),
    email: 'noc_killer@gmail.com',
    envioNotificacao: false,
    sexo: 'M',
  },
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<ClientElement>;
  displayedColumns: string[] = [
    'convenio',
    'nome',
    'cpf',
    'sexo',
    'edit',
    'delete',
  ];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadLista();
  }

  loadLista() {
    this.dataSource = ELEMENT_DATA;
  }
  update(index: any, newValue: any) {
    ELEMENT_DATA[index] = newValue;
    this.loadLista();
    this.table.renderRows();
  }

  delete(linha: any): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '500px',
      height: '250px',
      data: linha,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        var index = this.dataSource.findIndex((element) => element.id == linha.id)
        this.dataSource.splice(index, 1);
        this.table.renderRows();
      }
    });
  }

  openDialog(element: any): void {
    const dialogRef = this.dialog.open(FormClientComponent, {
      width: '500px',
      height: '650px',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      var cliente = this.dataSource.filter(
        (element) => element.id == result.id
      );
      if (cliente.length > 0) {
        this.update(
          this.dataSource.findIndex((element) => element.id == result.id),
          result
        );
      } else {
        result.id = this.dataSource.length + 1;
        ELEMENT_DATA.push(result);
        this.dataSource = ELEMENT_DATA;
        this.table.renderRows();
      }
    });
  }
}
