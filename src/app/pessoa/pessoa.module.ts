import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListagemComponent, ItemComponent],
})
export class PessoaModule { }
