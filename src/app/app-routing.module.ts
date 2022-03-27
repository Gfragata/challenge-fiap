import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnamneseComponent } from './views/anamnese/anamnese.component';
import { EmergencyButtonComponent } from './views/emergency-button/emergency-button.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { LoginComponent } from './views/login/login.component';
import { SenhaAtendimentoComponent } from './views/senha-atendimento/senha-atendimento.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    children: [{
      path: "", component: HomepageComponent
    }],
    // canActivate: [AuthGuard]
  },
  {
    path: "lista",
    component: HomepageComponent
  },
  {
    path: "emergencia",
    component: EmergencyButtonComponent
  },
  {
    path: "senha",
    component: SenhaAtendimentoComponent
  },
  {
    path: "anamnese",
    component: AnamneseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
