import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { AcoesComponent } from './acoes/acoes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PessoaService } from './shared/pessoa.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListagemComponent, 
    AcoesComponent, 
    FormularioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers:[
    PessoaService
  ]
})
export class PessoaModule { }
