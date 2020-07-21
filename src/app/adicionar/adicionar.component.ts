import { Component, OnInit, Input } from '@angular/core';
import { AdicionarService } from '../services/adicionar.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  @Input() usuario: any;
  public dadosUsuarioView: any;

  public listaUsuarios = [];

  public numeroUsuario: number;

  public sexo = false;

  constructor(private _service: AdicionarService) { 
  }

  ngOnInit(): void {
    // Pega os dados do banco para setar na view
    this.sexo = this.usuario._fields[0].properties.genre == "M" ? true : false;
    this.dadosUsuarioView  = this.usuario._fields[0].properties;
    this.listarUsuarios();
  }

  async listarUsuarios(){
    // Objeto do banco encapsulado nas propriedades
    const listaAmigos = await this._service.listarAmigos(this.dadosUsuarioView.email);
    const listarNaoAmigo = await this._service.listarNaoAmigo(this.dadosUsuarioView.email);

    this.numeroUsuario = listaAmigos.length + listarNaoAmigo.length;

    // Faz o filtro para listar apenas os objetos de amigos
    for (let i = 0; i < listaAmigos.length; i++){
      listaAmigos[i]._fields[0].properties["amigo"] = "Amigos";
      this.listaUsuarios.push(listaAmigos[i]._fields[0].properties);
    }

    for (let i = 0; i < listarNaoAmigo.length; i++){
      if (listarNaoAmigo[i]._fields[0].properties.email != this.dadosUsuarioView.email){
        listarNaoAmigo[i]._fields[0].properties["amigo"] = "Adicionar";
        this.listaUsuarios.push(listarNaoAmigo[i]._fields[0].properties);
      }
    }
  }

  async acaoClick(pessoa: string){
    const i = Number(pessoa);
    if(this.listaUsuarios[i].amigo == "Amigos"){
      await this._service.remover(this.dadosUsuarioView.email, this.listaUsuarios[i].email);
      this.listaUsuarios[i].amigo = "Adicionar";
    } else {
      await this._service.adicionar(this.dadosUsuarioView.email, this.listaUsuarios[i].email);
      this.listaUsuarios[i].amigo = "Amigos";
    }
  }

}

