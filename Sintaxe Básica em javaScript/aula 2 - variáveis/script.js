//TIPOS PRIMITIVOS

//BOLEAN
var vOuF = false;
console.log(vOuF); 
console.log(typeof(vOuF));

//NUMBER
var numeroQualquer = 1;
console.log(numeroQualquer)
console.log(typeof(numeroQualquer));

//STRING
var nome = 'Marcel';
console.log(nome)
console.log(typeof(nome));

//DECLARAÇÃO DE VARIÁVEIS
var variavel = 'marcel';
variavel = 'marcel.oliveira';
console.log(variavel);

let variavel2 = 'marcel2';
variavel2 = 'marcel.oliveira2';
console.log(variavel2);

const constante = 'LUIZ';
//constante = 'LUIZ MARCEL';
console.log(constante);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}
escopoLocal();

//ATRIBUIÇÃO
var atribuicao = 'marcel';

//COMPARAÇÃO
var comparacao = '0'== 0;
console.log(comparacao);

//COMPARAÇÃO IDENTICA
var comparacaoIdentica = '0'=== 0;
console.log(comparacaoIdentica); 

//ADIÇÃO
var adicao = 1 + 1;
console.log (adicao);

//SUBTRAÇÃO
var subtracao = 2 - 1;
console.log (subtracao);

//MULTIPLICAÇÃO
var multiplicacao = 2 * 3;
console.log (multiplicacao);

//DIVISÃO REAL
var divisaoReal = 6 / 2;
console.log (divisaoReal);

//DIVISÃO INTEIRA
var divisaoInteira = 5 % 2;
console.log (divisaoInteira);

//POTENCIAÇÃO
var potenciacao = 2 ** 10;
console.log (potenciacao);

//MAIOR
var maiorQue = 5 > 2;
console.log(maiorQue);

//MENOR
var menorQue = 5 < 2;
console.log(menorQue);

//MAIOR OU IGUAL
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//MENOR OU IGUAL
var maiorOuIgual = 5 <= 2;
console.log(maiorOuIgual);

//VARIAVEL E &&
var e = true && true;
console.log(e);

//VARIAVEL OU ||
var ou = true || false;
console.log(ou);

//VARIAVEL NÃO !
var nao = !true;
console.log(nao);