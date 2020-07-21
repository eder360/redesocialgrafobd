import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public senha: string;
  public usuario: any;
  public telaLogin = true;
  public telaCadastro = false;

  constructor(private toastr: ToastrService,
    private _service: LoginService) { }

  ngOnInit(): void {
    
  }

  async botao() {
    if (this.email == "" || this.email == undefined || this.senha == "" || this.senha == undefined) {
      return;
    }

    this.usuario = await this._service.login(this.email, this.senha);

    if ( this.usuario !== undefined){
      this.toastr.success('Login feito com sucesso!');
      this.telaLogin = false;
      this.telaCadastro = true;
      // window.location.href = "http://localhost:4200/adicionar"; 
    } else {
      this.telaLogin = true;
      this.telaCadastro = false;
      this.toastr.info('Não foi possível ser feito o login!');
    }
  }

}
