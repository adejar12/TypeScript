"use strict";
/** Usando no contexto de objeto */
// Básicamente aqui esta falando: olha, espero receber uma pessoa que é um objeto, e nele
// espero que tenha um atributo: nome
//          Exemplo -->    function saudarComOla(pessoa: { nome: string })
function saudarComOla(pessoa) {
    console.log("Ola, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Olá meu nome é " + this.nome + " " + sobrenome);
    },
};
// Saida => João
saudarComOla(pessoa);
mudarNome(pessoa);
// Saida => Joana
saudarComOla(pessoa);
//saudarComOla({ nome: "Jonas", idade: 27, xyz: true });
pessoa.saudar("Eae viado");
/** Usando no contexto de classe */
class Cliente {
    constructor() {
        this.nome = "";
        // Quando é uma class, pode se criar novos atributos
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log("a potencia é ==>", potencia(3, 8));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function teste(b) { }
// funciona oq o RealABC esta implementado os metodos de B
teste(new RealABC());
class AbstrataABD {
    a() { }
    b() { }
}
/** interface e object */
const x = 2;
const y = 3;
const z = 4;
const cli = {
    nome: "Pedro",
    toString() {
        return console.log("Esse nome é ==> " + this.nome);
    },
};
cli.toString();
//# sourceMappingURL=interface.js.map