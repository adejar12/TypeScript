class Data {
  //Publico por padrão
  dia: Number;
  mes: Number;
  ano: Number;

  constructor(dia: Number = 1, mes: Number = 1, ano: number = 1970) {
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
  constructor(
    public dia: Number = 1,
    public mes: Number = 1,
    public ano: number = 1970
  ) {}
}

const aniversario2 = new DataEsperta(3, 11, 1994);
console.log(aniversario);

const novoAniversario2 = new DataEsperta();
console.log(novoAniversario);

/** Agora adicionando metodos */

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public resumo(): string {
    return `${this.nome} custa R$:${this.precoComDesconto()} (${
      this.desconto * 100
    }% off ) `;
  }

  public precoComDesconto(): number {
    return this.preco * this.desconto;
  }
}

const prod1 = new Produto("Caneta Bic Preta", 10, 0.5);
console.log(prod1.resumo());

/** Agora com private */

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  //protected servi para que os filhos utilizem desse metodo
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
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
  constructor(modelo: string, velocidadeMaxima: number) {
    //super, mandando para o pai
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f4 = new Ferrari("F40", 324);
console.log("Ferrari acelerando ==>", f4.acelerar());

/** Getters & Setters */

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    this._idade = valor;
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;

console.log(pessoa1.idade);

/** Metodo estatico */

class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio;
  }

  teste() {
    return 0;
  }
}

/* Quando se utiliza static, não é invoca uma classe mais usando o new

const m1 = new Matematica();
console.log(m1.areaCirc(4));

const m2 = new Matematica();
m2.PI = 4.2;
console.log(m2.areaCirc(4));*/

/** Classe Abstrata */

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getRsultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicar extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getRsultado());

c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getRsultado());

/** Singleton */

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

//Como deu um getInstance, ele tem a unica instancia disponivel e agora ele consegue pegar o metodo agora
console.log(Unico.getInstance().agora());

/** Somente Leitura */

class Aviacao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviacao("Tu 111", "PT-ABC");
// turboHelice.modelo = 'DC-8'    -> Da erro pois não pode alterar mais o modelo, devido ao readonly
