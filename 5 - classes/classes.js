"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1994);
console.log(aniversario);
const novoAniversario = new Data();
console.log(novoAniversario);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new DataEsperta(3, 11, 1994);
console.log(aniversario);
const novoAniversario2 = new DataEsperta();
console.log(novoAniversario);
/** Agora adicionando metodos */
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$:${this.precoComDesconto()} (${this.desconto * 100}% off ) `;
    }
    precoComDesconto() {
        return this.preco * this.desconto;
    }
}
const prod1 = new Produto("Caneta Bic Preta", 10, 0.5);
console.log(prod1.resumo());
/** Agora com private */
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    //protected servi para que os filhos utilizem desse metodo
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "ka", 185);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
/** Herança */
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        //super, mandando para o pai
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f4 = new Ferrari("F40", 324);
console.log("Ferrari acelerando ==>", f4.acelerar());
/** Getters & Setters */
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        this._idade = valor;
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);
/** Metodo estatico */
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
    teste() {
        return 0;
    }
}
Matematica.PI = 3.1416;
/* Quando se utiliza static, não é invoca uma classe mais usando o new

const m1 = new Matematica();
console.log(m1.areaCirc(4));

const m2 = new Matematica();
m2.PI = 4.2;
console.log(m2.areaCirc(4));*/
/** Classe Abstrata */
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getRsultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getRsultado());
c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getRsultado());
/** Singleton */
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
//Como deu um getInstance, ele tem a unica instancia disponivel e agora ele consegue pegar o metodo agora
console.log(Unico.getInstance().agora());
/** Somente Leitura */
class Aviacao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviacao("Tu 111", "PT-ABC");
// turboHelice.modelo = 'DC-8'    -> Da erro pois não pode alterar mais o modelo, devido ao readonly
//# sourceMappingURL=classes.js.map