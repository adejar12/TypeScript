function echo(objeto: any) {
  return objeto;
}

console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }));

//Usando Generics
// o T é apenas para deixar generico, poderia ser qualquer coisa, o T é apenas um generico
function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("João").length);
// Se você comparar a linha 17 com a 6 vai notar aqui ele entendeu que o 27 é numero, logo não exite o length
console.log(echoMelhorado(27).length);
console.log(echoMelhorado({ nome: "João", idade: 27 }));

/** Generics disponiveis na API */

const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);

// Array#2
function imprimir<T>(args: T[]): void {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3, 4]);
//básicamente sempre que vc usa o <> vc esta usando o generic
imprimir<number>([1, 2, 3, 4]);
imprimir<string>(["Ana", "Bia", "CARLOS"]);
imprimir(["Ana", "Bia", "CARLOS"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "fulano", idade: 22 },
  { nome: "Ciclano", idade: 23 },
  { nome: "Beltrano", idade: 24 },
]);

interface Aluno {
  nome: string;
  idade: number;
}

imprimir<Aluno>([
  { nome: "Fulainha", idade: 22 },
  { nome: "Ciclaninhp", idade: 23 },
  { nome: "Beltraninho", idade: 24 },
]);

/** EXPLICAÇÃO BÁSICA DO QUE É O GENERICS, O imprimir é generico, ele aceita de todo tipo, vc pode chamar ele passando ou não uma especificação
 * Na hora de chamar vc especifica (caso assim queira), mas a função em si, não esta especificada
 */

/** Tipo Genérioco */

type Echo = <T>(data: T) => T;
const chamarEco: Echo = echoMelhorado;
console.log(chamarEco<string>("Alguma coisa"));

/** Class com Generics */

class OperacoBinaria {
  constructor(public operador1: any, public operador2: any) {}

  executar() {
    return this.operador1 + this.operador2;
  }
}

console.log(new OperacoBinaria("Bom", "Dia").executar());
console.log(new OperacoBinaria(3, 7).executar());
console.log(new OperacoBinaria(3, "Opa").executar());

/** Aqui é o primeiro exemplo a utilizada do genericos, pq a função ira tentar somar objetos
 * o que por sua vez o type não vai reclamar, o que na teoria deveria reclamar. O genericos
 * vai corrigir isso
 */
console.log(new OperacoBinaria({}, {}).executar());

/** O R é basicamente o retorno, outro tipo que pode passar, e lembrando que pode ser qualquer letra */

abstract class OperacoBinariaGenerico<T, R> {
  constructor(public operador1: T, public operador2: T) {}

  abstract executar(): R;
}

interface tipo1 {
  nome: string;
  idade: number;
}

class OperacoBinariaGenericoInstancia extends OperacoBinariaGenerico<
  tipo1,
  number
> {
  executar(): number {
    return this.operador1.idade + this.operador2.idade;
  }
}

/** Aqui é o fim do exemplo da tentativa de soma de objetos
 */

console.log(
  "Soma das idades ==>",
  new OperacoBinariaGenericoInstancia(
    { nome: "Adejar", idade: 27 },
    { nome: "Luiz", idade: 25 }
  ).executar()
);

/** Desafio = Diferença entre datas
 * PS: Essa classe Data já foi declarada lá na aula de Classe (olhe o arquivo), por isso deve importar ele no HTML para funcionar
 */

class DiferencaEntreDatas extends OperacoBinariaGenerico<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operador1);
    const t2 = this.getTime(this.operador2);

    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diferenca / dia)} dia(s)`;
  }
}

const d1 = new Data(1, 1, 2020);
const d2 = new Data(5, 2, 2020);

console.log(
  "Diferença entre dias ==>",
  new DiferencaEntreDatas(d1, d2).executar()
);

/** Desafio da classe fila
 *
 * Atributo: fila (array)
 * Metodos: entrar (push), proximo (splice),fila
 *
 */

class Fila<T> {
  private array: Array<T>;

  constructor(...args: T[]) {
    this.array = args;
  }

  entrar(dado: T): void {
    this.array.push(dado);
  }

  fila(): Array<T> {
    return this.array;
  }

  proximo(): T | null {
    if (this.array.length >= 0 && this.array[0]) {
      let retorno = this.array[0];
      this.array.splice(0, 1);

      return retorno;
    } else {
      return null;
    }
  }
}

const fila = new Fila<number>(1, 2, 3, 4, 5);

console.log("fila ==>", fila.fila());
console.log("fila - proximo ==>", fila.proximo());
console.log("fila ==>", fila.fila());

/** Restrições
 *
 * No exemplo abaixo o T é obrigatiormente um numero ou texto
 *
 */

class FilaRestrita<T extends number | string> {
  private array: Array<T>;

  constructor(...args: T[]) {
    this.array = args;
  }

  entrar(dado: T): void {
    this.array.push(dado);
  }

  fila(): Array<T> {
    return this.array;
  }

  proximo(): T | null {
    if (this.array.length >= 0 && this.array[0]) {
      let retorno = this.array[0];
      this.array.splice(0, 1);

      return retorno;
    } else {
      return null;
    }
  }
}

/** Desafio final do curso
 *
 * Desafio Mapa
 * Array de Objetos (Cahve/Valor) -> itens
 * Métodos: obter(Chave),colocar({C,V}
 * limpar(), imprimir()
 *
 */

class Mapa<N, S> {
  private itens = new Array<{ chave: N; valor: S }>();

  colocar(usuario: { chave: N; valor: S }): void {
    let retorno = this.itens.filter((oneItem, index) => {
      if (oneItem.chave === usuario.chave) {
        return { index, ...oneItem };
      }
    });

    if (retorno.length > 0) {
      let retorno = this.itens.map((oneItem) => {
        if (oneItem.chave === usuario.chave) {
          oneItem.valor = usuario.valor;
        }

        return oneItem;
      });

      this.itens = retorno;
    } else {
      this.itens.push(usuario);
    }
  }

  imprimir(): void {
    this.itens.map((oneItem) => {
      console.log("item ==>", oneItem);
    });
  }

  obter(data: N): { chave: N; valor: S } {
    let retorno = this.itens.filter((oneItem, index) => {
      return oneItem.chave === data;
    });

    return retorno[0];
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Pedrinho do Castelo branco" });

console.log("Obtido do mapa ==>", mapa.obter(2));
mapa.imprimir();
/*mapa.limpar()
mapa.imprimir()*/
