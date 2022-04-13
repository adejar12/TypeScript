let canal: string = "Gazeta";
let inscritos: number = 10;

//Para impedir que esse tipo de coisa acontece:
//            canal = inscritos;
//De uma string receber um numero e o typeScript ainda compile,
//adicione no arquivo tsconfig a seguinte linha de código:
// "noEmitOnError":true

//** strictNullChecks */
function saudar(isManha: boolean) {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia";
  }

  return saudacao;
}
