//Declare uma variavel x que representa o lado de um quadrado
//atribua um valor qualquer para ela
//calcule a area do quadrado e armazene em uma variavel chamada area
//exiba o valor area
let x = 4;
let area;

area = x ** 2;
console.log(area);

//declara duas variavel, nota1 nota2
//atribua um valor 0 a 10 para cada uma
//calcule a média das duas armazene em uma variavel chamada soma
//exiba o valor da soma

let nota1 = 5;
let nota2 = 8;
let nota3 = 9;
let soma = Math.round((nota1 + nota2 + nota3) / 3);
console.log(soma);

//Dada uma rtemperatura C em graus celsius, esreva ema expressão para convertê-la para
//fahrenheit use a formula f= 9/5 * C + 32

let C = 21;
let F = Math.round((9 / 5) * C + 32);

console.log(F);

//declare duas variaveis "a" e "b" atribua dois valores quaisquer e troque o conteúdo das duas variaveis
// A = 1 b = 2 > a = 2  b = 1

let a = 1;
let b = 2;
let j = a;

console.log("A=", (a = b), "B=", (b = j));

const xy = 10;

console.log(xy);

//typeof mostra o tipo da variavel

console.log(typeof xy);
// parseInt o valor inteiro ignora o decimal

const pi = 3.14;

console.log(parseInt(pi));

// declare duas variaveis, uma com numero inteiro e outra com um numero de ponto flutuante
//some os valores e exiba o resultado

const int = 30;
const flut = 25.87;
let resultado = int + flut;
console.log(resultado);

//dado um valor decimal, remova parte decimal mantendo apenas a parte fracionada

const decimal = 4.75;
const result = decimal % 1;

console.log(result);

const decimal2 = 4.74;
const resultdecimal2 = parseInt(decimal2);

console.log(decimal2 - resultdecimal2);
