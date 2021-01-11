import { Component, Input, OnInit } from '@angular/core';
import { PessoaService } from '../shared/pessoa.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent implements OnInit {

  @Input() id = 0;

  constructor(private servico: PessoaService) { }

  ngOnInit() {
  }

  public teste(e){
    
  }

}
