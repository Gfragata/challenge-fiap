import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-senha-atendimento',
  templateUrl: './senha-atendimento.component.html',
  styleUrls: ['./senha-atendimento.component.css'],
})
export class SenhaAtendimentoComponent implements OnInit {
  prioridade: any;
  senha: any;
  esconder: any;
  text: any;
  constructor() {}

  ngOnInit(): void {
    this.teste();
  }

  async teste() {
    await this.delay(5000);
    this.geraSenha();
    this.esconder = document.getElementById('spinner');
    this.esconder.style.visibility = 'hidden';
    this.text = document.getElementById('text');
    this.text.style.visibility = 'hidden';
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  geraSenha() {
    if (localStorage.getItem('infartando')) {
      this.prioridade = 'E';
    } else {
      this.prioridade = 'A';
    }
    if (localStorage.getItem('senha')) {
      this.senha = localStorage.getItem('senha');
    } else {
      this.senha = Math.floor(Math.random() * 10000);
      localStorage.setItem('senha', this.senha);
    }
  }
}
