"use strict";
class Moto {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    buzinar() {
        console.log("Buzinouuuu");
    }
    acelerar(delta) {
        this._velocidade = this._velocidade + delta;
        console.log("A nova velocidade é ==> ", this._velocidade);
    }
}
const moto = new Moto("Ducati");
console.log(moto.nome);
/** Desafio 2 */
class Objeto2D {
    constructor(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super(base, altura);
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
/** Desafio 3 - Get e sseter */
class PessoaDesafio {
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
const pessoaDesafio = new PessoaDesafio();
pessoaDesafio.nome = "Adejar";
console.log(pessoaDesafio.nome);
//# sourceMappingURL=desafio.js.map