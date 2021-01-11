import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemComponent } from './pessoa/listagem/listagem.component';
import { AcoesComponent } from './pessoa/acoes/acoes.component';
import { FormularioComponent } from './pessoa/formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { PessoaService } from './pessoa/shared/pessoa.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    AcoesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
