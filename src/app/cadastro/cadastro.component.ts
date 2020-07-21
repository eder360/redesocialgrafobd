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
    private _service: CadastroService) { }

  async ngOnInit(): Promise<void> {
  }

  async botao() {
    // Se as senhas não conferirem não é feita a conexão com o banco
    if (this.vm.USUARIO.senha !== this.vm.USUARIO.confirmaSenha) {
      this.toastr.warning('As senhas não conferem!');
      return;
    }

    if (await this._service.cadastrar(this.vm.USUARIO)) {
      this.toastr.success('Cadastro feito com sucesso, aguarde que você será direcionado a página de login.');

      setTimeout(function () {
        window.location.href = "http://localhost:4200";
      }, 2000);

    } else {
      this.toastr.info('Não foi possível ser feito o cadastro!');
    }
  }

}
