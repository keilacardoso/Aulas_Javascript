import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca} from "./ContaPoupanca.js";

const cliente1 = new Cliente("Keila Cardoso", 47654070802);
const cliente2 = new Cliente("Leandro Cardoso", 15649965811);

const cc1 = new ContaCorrente(1001, cliente1);
cc1.depositar(5000);
cc1.sacar(200);

const cc2 = new ContaPoupanca(50,1001, cliente2);

console.log(cc1);
console.log(cc2);
console.log("Contas: " + ContaCorrente.numeroContas);



