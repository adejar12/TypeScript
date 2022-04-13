"use strict";
// Arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//quando se utiliza o => sem os {}, não precisa escrever o return
const subtratir = (n1, n2) => n1 - n2;
console.log(subtratir(2, 3));
const saudacao = () => console.log("ola");
saudacao();
const falarCom = (pessoa) => console.log("Ola " + pessoa);
falarCom("João");
function normalComThis() {
    console.log(this);
}
//Quando se aplica o .bind quer dizer o que, o que enviar por parametro vai ser usado dentro da bunção no this
const normalComThisEspecial = normalComThis.bind({ nome: "Ana" });
normalComThis();
normalComThisEspecial();
//this em função arrow nunca muda, diferente de uma função normal
const arrowComThis = () => console.log(this);
arrowComThis();
/** PARAMETRO PADRÃO */
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("fim");
}
contagemRegressiva(3);
/** Rest & Spread */
const numbers = [1, 10, 99, -5];
//console.log(Math.max(numbers))  --> Dessa forma não é possivel
console.log(Math.max(...numbers));
const turmaA = ["1", "2", "3"];
const turmaB = ["3", "4", "5", ...turmaA];
console.log(turmaB);
function retornaArray(arg1, arg2) {
    return [arg1, arg2];
}
const numeros = retornaArray(1, 2);
console.log(numeros);
//Agora de uma forma melhor, que não tem quantidade de argumentos definidos
function retornaArray2(...args) {
    return args;
}
const numeros2 = retornaArray2(1, 2, 3, 5, 8, 7, 9);
console.log(numeros2);
console.log(retornaArray2(...numbers));
const tupla = [1, "abc", false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
/**Destruturing(array) */
const caracteristicas = ["Motor Zetec 1.8", 2020];
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
/** Callback */
function esperar3s(callback) {
    setTimeout(() => {
        callback("3s depois...");
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3s depois promie...");
        }, 3000);
    });
}
esperar3sPromise().then((dado) => console.log(dado));
fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((personagem) => personagem.films)
    .then((films) => fetch(films[0]))
    .then((resFilm) => resFilm.json())
    .then((filme) => console.log(filme.title))
    .catch((err) => console.log("Catch!!!!" + err));
// no es5 tudo aqui em baixo seria possivel, pois não existia o conceito de let nem const
// já no es6, já existe e boa parte das linhas iria dar erro
let estaFrio = true;
if (estaFrio) {
    var acao = "Colocar o casaco";
    let acao2 = "Colocar o casaco";
}
console.log(acao);
console.log(acao2);
const cpf = "123.456.000-99";
cpf = "123.456.000-98";
console.log(cpf);
//# sourceMappingURL=ecmascript.js.map