import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567900);
const gerente = new Gerente("Ricardo", 5000, 12345879920);


gerente.cadastrarSenha("123");
const login = SistemaAutenticacao.login(gerente, "123");

console.log(login)
