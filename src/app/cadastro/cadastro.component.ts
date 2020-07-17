import { Component, OnInit } from '@angular/core';
import { CadastroViewModel } from '../view-model/cadastro-view-model';
import { ToastrService } from 'ngx-toastr';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public vm: CadastroViewModel = new CadastroViewModel();
 
  constructor(private toastr: ToastrService,
    private _serice: CadastroService) { }

  async ngOnInit(): Promise<void> {
  }

  botao() {
    // Se as senhas não conferirem não é feita a conexão com o banco
    if (this.vm.USUARIO.senha !== this.vm.USUARIO.confirmaSenha) {
      this.toastr.warning('As senhas não conferem!');
      return;
    }

    this._serice.cadastrar(this.vm.USUARIO);

  }

}
