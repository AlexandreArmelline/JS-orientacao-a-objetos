/*O nome desse arquivo começa com letra maiuscula pq se refere a uma classe */

export class ContaCorrente{
    agencia;
    cliente;

    _saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor;
        }else console.log(`saque de não realizado`)

        
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}