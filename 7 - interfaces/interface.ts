/** Usando no contexto de objeto */

interface Humano {
  nome: string;
  idade?: number;
  // Serve para dizer que, pode ter outro atributo, mas ele é dinamico
  // por exemplo, peso, sexo e afins ...um atributo dinamico
  [props: string]: any;
  saudar(sobrenome: string): void;
}

// Básicamente aqui esta falando: olha, espero receber uma pessoa que é um objeto, e nele
// espero que tenha um atributo: nome
//          Exemplo -->    function saudarComOla(pessoa: { nome: string })
function saudarComOla(pessoa: Humano) {
  console.log("Ola, " + pessoa.nome);
}

function mudarNome(pessoa: { nome: string }) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string): void {
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

class Cliente implements Humano {
  nome: string = "";
  // Quando é uma class, pode se criar novos atributos
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string): void {
    console.log("Olá meu nome é " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";

saudarComOla(meuCliente);
meuCliente.saudar("Solo");

/** Interface e função */

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Math.pow(base, exp);
};

console.log("a potencia é ==>", potencia(3, 8));

/** Herança */
// a palavra implements é usado quando vc tem uma relação de class e interface
// já o extends é para class e class ou interface e interface

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

function teste(b: B) {}

// funciona oq o RealABC esta implementado os metodos de B
teste(new RealABC());

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
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
