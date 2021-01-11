import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() {}

  listarTodos(): Pessoa[] {
    const pessoas = localStorage['pessoas'];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  cadastrar(pessoa: Pessoa): void{
    const pessoas = this.listarTodos();
    pessoas.push(pessoa);
    localStorage['pessoas'] = JSON.stringify(pessoas);
  }
}
