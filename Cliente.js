/*O nome desse arquivo começa com letra maiuscula pq se refere a uma classe */

export class Cliente{
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf
    }
}