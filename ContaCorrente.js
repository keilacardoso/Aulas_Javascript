import {Conta} from './Conta.js';

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    constructor(agencia, cliente){
        super(0, agencia, cliente); //super referencia o construtor da classe Conta
        ContaCorrente.numeroContas += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa) //sobrescreve o metodo da classe Conta (mãe)
    }

}