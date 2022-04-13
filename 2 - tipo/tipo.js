"use strict";
//String
let nome = "João";
console.log(nome);
//nome = 28
//Number
let idade = 27;
idade = 27.5;
console.log(27.5);
//Boolean
let possuiHobbies = false;
//possuiHobbies = 1
// tipo any
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);
// array
let hoobis = ["Cozinhar", "praticar esportes"];
console.log(hoobis[0]);
console.log(typeof hoobis);
let hoobisString = ["Cozinhar", "praticar esportes"];
console.log(hoobis[0]);
console.log(typeof hoobis);
// tupla, um array que o primeiro item é uma string e o segundo é um numero. Exemplo
let endereco = ["Av Principal", 99];
console.log(endereco);
//enum, são valores fixos, exemplo: dias da semana
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranda"] = 2] = "Laranda";
    Cor[Cor["Amarelho"] = 3] = "Amarelho";
    Cor[Cor["Vermelho"] = 4] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//Função
function retornaMeuNome() {
    //return minhaIdade;
    return nome;
}
console.log(retornaMeuNome());
function oi() {
    //return minhaIdade;
    console.log("oi");
}
oi();
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(2.8, 2));
// tipo função, o => é o retorno, ou seja, dizendo que o retorno é do tipo de numver
let calculo;
calculo = multiplicar;
console.log(calculo(7, 8));
// Objeto
let usuario = {
    nome: "João",
    idade: 27,
};
//usuario = {}
/*usuario = {
    name: 'Maria',
    age:31
}*/
usuario = {
    nome: "Maria",
    idade: 50,
};
console.log(usuario);
//Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de string com os nomes dos supervisores
 *  - Funçaõ de bater ponto que rece a hora (número)
 *    e retorna uma string
 *      -> ponto normal (<=8)
 *      -> forma do horário (>8)
 */
let funcionarios = {
    supervisores: ["João", "Maria", "Joaquina"],
    baterPonto(data) {
        if (data <= 8) {
            return "ponto normal";
        }
        return "fora do horario";
    },
};
console.log(funcionarios.baterPonto(8));
let funcionarios2 = {
    supervisores: ["Bia", "Maria", "Joaquina", "Vagabundo"],
    baterPonto(data) {
        if (data <= 8) {
            return "ponto normal";
        }
        return "fora do horario";
    },
};
console.log(funcionarios.baterPonto(50));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = "20";
console.log(`Minha nota é ${nota}`);
//Never, basicamente é uma função que nunca termina, ou que retorna algum erro
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "Sabão",
    preco: -1,
    validarProduto() {
        if (this.nome || this.nome.trim().length === 0) {
            falha("Precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha("Preco inválido");
        }
    },
};
produto.validarProduto();
// Null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: "Fulado",
    tel1: "99999",
    tel2: null,
};
// Desafio -> converter JS para TS
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: "Ana Maria",
    contaBancaria: contaBancaria,
    contatos: ["999999", "8888888"],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
let contaBancaria2 = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista2 = {
    nome: "Ana Maria",
    contaBancaria: contaBancaria,
    contatos: ["999999", "8888888"],
};
correntista2.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipo.js.map