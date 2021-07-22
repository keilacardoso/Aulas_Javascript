import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroContas += 1;
    }

    set cliente(cliente){
        if(cliente instanceof Cliente)
        this._cliente = cliente;
    }

    get saldo(){
        return this._saldo;
    }

    get cliente(){
        return this._cliente;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0 ){
            this._saldo += valor;
        }
    }
    
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}