//String
let nome = "João";
console.log(nome);

//nome = 28

//Number
let idade = 27;
idade = 27.5;

console.log(27.5);

//Boolean
let possuiHobbies = false;
//possuiHobbies = 1

// tipo any
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = "27";
console.log(typeof minhaIdade);

// array

let hoobis = ["Cozinhar", "praticar esportes"];
console.log(hoobis[0]);
console.log(typeof hoobis);

let hoobisString: string[] = ["Cozinhar", "praticar esportes"];
console.log(hoobis[0]);
console.log(typeof hoobis);

// tupla, um array que o primeiro item é uma string e o segundo é um numero. Exemplo

let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

//enum, são valores fixos, exemplo: dias da semana
enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul, // 101,
  Laranda = 2, //2
  Amarelho, //3
  Vermelho, //4
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

//Função

function retornaMeuNome(): string {
  //return minhaIdade;
  return nome;
}

console.log(retornaMeuNome());

function oi(): void {
  //return minhaIdade;
  console.log("oi");
}

oi();

function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log(multiplicar(2.8, 2));

// tipo função, o => é o retorno, ou seja, dizendo que o retorno é do tipo de numver

let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(calculo(7, 8));

// Objeto

let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};

//usuario = {}

/*usuario = {
    name: 'Maria',
    age:31
}*/

usuario = {
  nome: "Maria",
  idade: 50,
};

console.log(usuario);

//Desafio
/**
 * Criar um objeto funcionário com:
 *  - Array de string com os nomes dos supervisores
 *  - Funçaõ de bater ponto que rece a hora (número)
 *    e retorna uma string
 *      -> ponto normal (<=8)
 *      -> forma do horário (>8)
 */

let funcionarios: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
} = {
  supervisores: ["João", "Maria", "Joaquina"],
  baterPonto(data: number): string {
    if (data <= 8) {
      return "ponto normal";
    }

    return "fora do horario";
  },
};

console.log(funcionarios.baterPonto(8));

//Agora o desafio com ALias

type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

let funcionarios2: Funcionario = {
  supervisores: ["Bia", "Maria", "Joaquina", "Vagabundo"],
  baterPonto(data: number): string {
    if (data <= 8) {
      return "ponto normal";
    }

    return "fora do horario";
  },
};

console.log(funcionarios.baterPonto(50));

// Union Types

let nota: number | string = 10;
console.log(`Minha nota é ${nota}`);

nota = "20";
console.log(`Minha nota é ${nota}`);

//Never, basicamente é uma função que nunca termina, ou que retorna algum erro

function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: -1,
  validarProduto() {
    if (this.nome || this.nome.trim().length === 0) {
      falha("Precisa ter um nome");
    }
    if (this.preco <= 0) {
      falha("Preco inválido");
    }
  },
};

produto.validarProduto();

// Null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulado",
  tel1: "99999",
  tel2: null,
};

// Desafio -> converter JS para TS

let contaBancaria = {
  saldo: 3456,
  depositar(valor: any) {
    this.saldo += valor;
  },
};

let correntista = {
  nome: "Ana Maria",
  contaBancaria: contaBancaria,
  contatos: ["999999", "8888888"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);

// Conversão *********

type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria2: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista2: Correntista = {
  nome: "Ana Maria",
  contaBancaria: contaBancaria,
  contatos: ["999999", "8888888"],
};

correntista2.contaBancaria.depositar(3000);
console.log(correntista);
