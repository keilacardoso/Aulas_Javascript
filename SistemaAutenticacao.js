/*
Ser autenticável significa ter o metodo autenticar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}