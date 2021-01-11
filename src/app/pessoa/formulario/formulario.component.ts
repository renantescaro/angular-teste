import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from '../shared/pessoa.model';
import { PessoaService } from '../shared/pessoa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa: NgForm;
  pessoa: Pessoa;

  constructor(
    private service: PessoaService,
    private router: Router) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  cadastrar() : void{

    console.log(this.pessoa);

    //this.service.cadastrar(this.pessoa);
    //this.router.navigate(['']);
  }

}
