class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
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
}


const cliente1 = new Cliente();
const conta_Ale = new ContaCorrente();
cliente1.nome = "Ale";
cliente1.cpf = 123456789;
conta_Ale.agencia = 1001;
conta_Ale._saldo = 0;


const cliente2 = new Cliente();
const conta_Nessa = new ContaCorrente();
cliente2.cpf = 123456781;
cliente2.nome = "Nessa";
conta_Nessa.agencia = 1001;
conta_Nessa._saldo = 0;




conta_Ale.depositar(300);
conta_Ale.depositar(200);

let valorSacado = conta_Ale.sacar(50);
valorSacado += conta_Ale.sacar(100);

console.log(cliente1);
console.log(conta_Ale);

console.log(valorSacado);



