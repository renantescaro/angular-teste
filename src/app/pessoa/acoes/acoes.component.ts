import { Component, Input, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent implements OnInit {

  @Input() id = 0;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
  }

  public teste(e){
    this.servico.editar(this.id)
  }

}
