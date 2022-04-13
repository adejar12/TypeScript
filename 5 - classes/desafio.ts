class Moto {
  private _nome: string;
  private _velocidade: number;

  constructor(nome: string) {
    this._nome = nome;
  }

  get nome(): string {
    return this._nome;
  }

  public buzinar(): void {
    console.log("Buzinouuuu");
  }

  public acelerar(delta: number): void {
    this._velocidade = this._velocidade + delta;
    console.log("A nova velocidade é ==> ", this._velocidade);
  }
}

const moto = new Moto("Ducati");
console.log(moto.nome);

/** Desafio 2 */

abstract class Objeto2D {
  protected base: number = 0;
  protected altura: number = 0;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  abstract area(): number;
}

class Retangulo extends Objeto2D {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  public area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

/** Desafio 3 - Get e sseter */

class PessoaDesafio {
  private _nome: string;

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
}

const pessoaDesafio = new PessoaDesafio();

pessoaDesafio.nome = "Adejar";

console.log(pessoaDesafio.nome);
