import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ale";
cliente1.cpf = 123456789;

const conta_Ale = new ContaCorrente();
conta_Ale.cliente = cliente1
conta_Ale.agencia = 1001;
conta_Ale._saldo = 0;


const cliente2 = new Cliente();
cliente2.nome = "Nessa";
cliente2.cpf = 123456781;

const conta_Nessa = new ContaCorrente();
conta_Nessa.cliente = cliente2
conta_Nessa.agencia = 1002;
conta_Nessa._saldo = 0;


conta_Ale.depositar(300);
conta_Ale.depositar(200);

conta_Nessa.depositar(200);
conta_Nessa.depositar(100);

conta_Ale.sacar(50);
conta_Ale.sacar(100);

conta_Nessa.sacar(50);
conta_Nessa.sacar(10);

conta_Ale.transferir(100, conta_Nessa)

console.log(conta_Ale);

console.log(conta_Nessa);

console.log(conta_Ale.saldo);



