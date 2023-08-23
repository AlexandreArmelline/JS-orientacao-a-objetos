class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }
}


const cliente1 = new Cliente();
const conta_Ale = new ContaCorrente();
cliente1.nome = "Ale";
cliente1.cpf = 123456789;
conta_Ale.agencia = 1001;
conta_Ale.saldo = 0;


const cliente2 = new Cliente();
const conta_Nessa = new ContaCorrente();
cliente2.cpf = 123456781;
cliente2.nome = "Nessa";
conta_Nessa.agencia = 1001;
conta_Nessa.saldo = 0;


conta_Ale.saldo = 300
conta_Nessa.saldo = 400

conta_Ale.sacar(500)
conta_Nessa.sacar(1000)

console.log(cliente1)
console.log(conta_Ale)
console.log(cliente2)
console.log(conta_Nessa)


