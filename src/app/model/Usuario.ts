export class Usuario {
    public  primeiroNome: String;
    public ultimoNome: String;
    public email: string;
    public senha: string;
    public confirmaSenha: String;
    public dataNascimento: String;
    public numeroTelefone: String;
    public genero: String;

    constructor(){
        this.primeiroNome = '';
        this.ultimoNome = '';
        this.email = '';
        this.senha = '';
        this.confirmaSenha = '';
        this.dataNascimento = '';
        this.numeroTelefone = '';
        this.genero = '';
    }
}