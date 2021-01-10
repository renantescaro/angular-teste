import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { AcoesComponent } from './acoes/acoes.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListagemComponent, AcoesComponent, FormularioComponent],
})
export class PessoaModule { }
