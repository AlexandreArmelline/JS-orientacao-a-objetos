import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ale", 123456789);
const conta_Ale = new ContaCorrente(1001, cliente1);


const cliente2 = new Cliente("Nessa", 123456781);
const conta_Nessa = new ContaCorrente(1002, cliente2);



conta_Ale.depositar(500);

conta_Nessa.depositar(300);

conta_Ale.sacar(150);

conta_Nessa.sacar(150);

conta_Ale.transferir(100, conta_Nessa)

console.log(conta_Ale);

console.log(conta_Nessa);

console.log(ContaCorrente.numeroDecontas)



