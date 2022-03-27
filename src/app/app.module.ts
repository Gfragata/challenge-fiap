import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MatTableModule, MatTable } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './views/top-bar/top-bar.component';
import { FormClientComponent } from './views/form-client/form-client.component';
import { EmergencyButtonComponent } from './views/emergency-button/emergency-button.component';
import { LoginComponent } from './views/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { CadastroLoginComponent } from './views/cadastro-login/cadastro-login.component';
import { DeleteModalComponent } from './views/delete-modal/delete-modal.component';
import { SenhaAtendimentoComponent } from './views/senha-atendimento/senha-atendimento.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnamneseComponent } from './views/anamnese/anamnese.component';
import { ModalEmergenciaComponent } from './views/modal-emergencia/modal-emergencia.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopBarComponent,
    FormClientComponent,
    EmergencyButtonComponent,
    LoginComponent,
    CadastroLoginComponent,
    DeleteModalComponent,
    SenhaAtendimentoComponent,
    AnamneseComponent,
    ModalEmergenciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
