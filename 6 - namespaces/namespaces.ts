const PI = 3.14;

// Essas funções estão em um escopo global, se eu chamar qualquer uma delas, funciona
// Por isso precisamos do namespaces, que é um espaço reservado que quer dizer que
// só ali o nome é exclusivo
function areaCircurefencia(raio: number): number {
  return PI * Math.pow(raio, 2);
}

function areaRetangulo(base: number, altura: number): number {
  return base * altura;
}

console.log(areaCircurefencia(10));
console.log(areaRetangulo(10, 20));

//Resolvendo o problema de cima com namespace
namespace Areas {
  export function areaCircurefencia(raio: number): number {
    return PI * Math.pow(raio, 2);
  }

  export function areaRetangulo(base: number, altura: number): number {
    return base * altura;
  }
}

console.log(Areas.areaCircurefencia(10));
console.log(Areas.areaRetangulo(10, 20));

/** Namespace dentro de Namespace */

namespace Geometria {
  export namespace Area {
    export function areaCircurefencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }

    export function areaRetangulo(base: number, altura: number): number {
      return base * altura;
    }
  }
}

console.log(Geometria.Area.areaCircurefencia(10));
console.log(Geometria.Area.areaRetangulo(10, 20));

console.log("Geometria2 ==>", Geometria2.Area.areaCircurefencia(10));
console.log("Geometria2 ==>", Geometria2.Area.areaRetangulo(10, 20));
