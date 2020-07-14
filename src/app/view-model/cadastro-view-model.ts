import { Usuario } from "../model/Usuario";

export class CadastroViewModel {

  public USUARIO: Usuario;

  constructor(){
    this.USUARIO =  new Usuario();
  }

}