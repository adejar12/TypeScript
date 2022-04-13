"use strict";
const PI = 3.14;
// Essas funções estão em um escopo global, se eu chamar qualquer uma delas, funciona
// Por isso precisamos do namespaces, que é um espaço reservado que quer dizer que
// só ali o nome é exclusivo
function areaCircurefencia(raio) {
    return PI * Math.pow(raio, 2);
}
function areaRetangulo(base, altura) {
    return base * altura;
}
console.log(areaCircurefencia(10));
console.log(areaRetangulo(10, 20));
//Resolvendo o problema de cima com namespace
var Areas;
(function (Areas) {
    function areaCircurefencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircurefencia = areaCircurefencia;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Areas.areaRetangulo = areaRetangulo;
})(Areas || (Areas = {}));
console.log(Areas.areaCircurefencia(10));
console.log(Areas.areaRetangulo(10, 20));
/** Namespace dentro de Namespace */
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        function areaCircurefencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCircurefencia = areaCircurefencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Area.areaRetangulo = areaRetangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Area.areaCircurefencia(10));
console.log(Geometria.Area.areaRetangulo(10, 20));
console.log("Geometria2 ==>", Geometria2.Area.areaCircurefencia(10));
console.log("Geometria2 ==>", Geometria2.Area.areaRetangulo(10, 20));
//# sourceMappingURL=namespaces.js.map