"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("João").length);
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }));
//Usando Generics
// o T é apenas para deixar generico, poderia ser qualquer coisa, o T é apenas um generico
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("João").length);
// Se você comparar a linha 17 com a 6 vai notar aqui ele entendeu que o 27 é numero, logo não exite o length
console.log(echoMelhorado(27).length);
console.log(echoMelhorado({ nome: "João", idade: 27 }));
/** Generics disponiveis na API */
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
// Array#2
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3, 4]);
//básicamente sempre que vc usa o <> vc esta usando o generic
imprimir([1, 2, 3, 4]);
imprimir(["Ana", "Bia", "CARLOS"]);
imprimir(["Ana", "Bia", "CARLOS"]);
imprimir([
    { nome: "fulano", idade: 22 },
    { nome: "Ciclano", idade: 23 },
    { nome: "Beltrano", idade: 24 },
]);
imprimir([
    { nome: "Fulainha", idade: 22 },
    { nome: "Ciclaninhp", idade: 23 },
    { nome: "Beltraninho", idade: 24 },
]);
const chamarEco = echoMelhorado;
console.log(chamarEco("Alguma coisa"));
/** Class com Generics */
class OperacoBinaria {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
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
class OperacoBinariaGenerico {
    constructor(operador1, operador2) {
        this.operador1 = operador1;
        this.operador2 = operador2;
    }
}
class OperacoBinariaGenericoInstancia extends OperacoBinariaGenerico {
    executar() {
        return this.operador1.idade + this.operador2.idade;
    }
}
/** Aqui é o fim do exemplo da tentativa de soma de objetos
 */
console.log("Soma das idades ==>", new OperacoBinariaGenericoInstancia({ nome: "Adejar", idade: 27 }, { nome: "Luiz", idade: 25 }).executar());
/** Desafio = Diferença entre datas
 * PS: Essa classe Data já foi declarada lá na aula de Classe (olhe o arquivo), por isso deve importar ele no HTML para funcionar
 */
class DiferencaEntreDatas extends OperacoBinariaGenerico {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operador1);
        const t2 = this.getTime(this.operador2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(1, 1, 2020);
const d2 = new Data(5, 2, 2020);
console.log("Diferença entre dias ==>", new DiferencaEntreDatas(d1, d2).executar());
/** Desafio da classe fila
 *
 * Atributo: fila (array)
 * Metodos: entrar (push), proximo (splice),fila
 *
 */
class Fila {
    constructor(...args) {
        this.array = args;
    }
    entrar(dado) {
        this.array.push(dado);
    }
    fila() {
        return this.array;
    }
    proximo() {
        if (this.array.length >= 0 && this.array[0]) {
            let retorno = this.array[0];
            this.array.splice(0, 1);
            return retorno;
        }
        else {
            return null;
        }
    }
}
const fila = new Fila(1, 2, 3, 4, 5);
console.log("fila ==>", fila.fila());
console.log("fila - proximo ==>", fila.proximo());
console.log("fila ==>", fila.fila());
/** Restrições
 *
 * No exemplo abaixo o T é obrigatiormente um numero ou texto
 *
 */
class FilaRestrita {
    constructor(...args) {
        this.array = args;
    }
    entrar(dado) {
        this.array.push(dado);
    }
    fila() {
        return this.array;
    }
    proximo() {
        if (this.array.length >= 0 && this.array[0]) {
            let retorno = this.array[0];
            this.array.splice(0, 1);
            return retorno;
        }
        else {
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
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    colocar(usuario) {
        let retorno = this.itens.filter((oneItem, index) => {
            if (oneItem.chave === usuario.chave) {
                return Object.assign({ index }, oneItem);
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
        }
        else {
            this.itens.push(usuario);
        }
    }
    imprimir() {
        this.itens.map((oneItem) => {
            console.log("item ==>", oneItem);
        });
    }
    obter(data) {
        let retorno = this.itens.filter((oneItem, index) => {
            return oneItem.chave === data;
        });
        return retorno[0];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Pedrinho do Castelo branco" });
console.log("Obtido do mapa ==>", mapa.obter(2));
mapa.imprimir();
/*mapa.limpar()
mapa.imprimir()*/
//# sourceMappingURL=genericos.js.map