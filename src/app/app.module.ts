import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListagemComponent } from './pessoa/listagem/listagem.component';
import { AcoesComponent } from './pessoa/acoes/acoes.component';
import { FormularioComponent } from './pessoa/formulario/formulario.component';
import { ServicoService } from './pessoa/servico.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    AcoesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
