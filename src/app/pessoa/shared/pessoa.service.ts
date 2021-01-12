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

  editar(pessoaEdicao: Pessoa): void{
    const pessoas = this.listarTodos();
    pessoas.forEach(pessoa => {
      if(pessoa.id = pessoaEdicao.id){
        pessoa = pessoaEdicao;
      }
    })
  }

  porId(id: number): Pessoa{
    const pessoas = this.listarTodos();
    pessoas.forEach(pessoa => {
      if(pessoa.id = id){
        return pessoa;
      }
    })
    return new Pessoa();
  }
}
