/*
Ser autenticável significa ter o metodo autenticar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        if(SistemaAutenticacao.autencicacao(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static autencicacao(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}