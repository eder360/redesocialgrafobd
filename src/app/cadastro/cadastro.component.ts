import { Component, OnInit } from '@angular/core';
import { CadastroViewModel } from '../view-model/cadastro-view-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public vm: CadastroViewModel = new CadastroViewModel();

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  botao(){
    if (this.vm.USUARIO.senha !== this.vm.USUARIO.confirmaSenha){
      this.toastr.warning('As senhas não conferem!');
    }
  }

}
