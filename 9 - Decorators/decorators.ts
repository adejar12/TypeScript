//@logarClasse -> Linha comentada devido a linha 15
//@logarClasseSe(true) -> Linha comentada devido a linha 20
@decorator("Sou um decorator", 123)
class Eletrodomestico {
  constructor() {
    console.log("novo ...");
  }
}

/** Logar classe so é chamada quando a classe é carregada (não é a mesma coisa de new)*/
function logarClasse(construtor: Function) {
  console.log(construtor);
}

/** Factory: é uma função que tem como o objetivo retornar um decorator */

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : null;
}

function decorator(a: string, b: number) {
  return function (constructor: Function): void {
    console.log(a + " " + b);
  };
}
