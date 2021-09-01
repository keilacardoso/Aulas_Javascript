//Classe Abstrata
export class Conta{
    constructor(saldoInicial, agencia, cliente){
        if(this.constructo == Conta){
            throw new Error("Error! Tryng to instantiate an abstrac class");
        }
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
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

    //metodo abstrato
    sacar(valor){
        throw new Error('Abstract Method')
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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