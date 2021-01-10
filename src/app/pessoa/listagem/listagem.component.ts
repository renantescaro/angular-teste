import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  titulo  = "Listagem de Pessoas";
  ths     = ['Nome','Idade','Genero','Ações'];
  pessoas = [
    {
      'id'     : 1,
      'nome'   : 'Renan',
      'idade'  : 24,
      'genero' : 'm'
    },
    {
      'id'     : 2,
      'nome'   : 'Ana',
      'idade'  : 21,
      'genero' : 'f'
    },
    {
      'id'     : 4,
      'nome'   : 'Zana',
      'idade'  : 1,
      'genero' : 'f'
    },
    {
      'id'     : 6,
      'nome'   : 'Bia',
      'idade'  : 19,
      'genero' : 'f'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
