function helloword() {
    console.log("Ola mundo");
}

helloword()

function digaOiPara(nome) {
    console.log(`Ola ${nome}`);

}

digaOiPara("Thomas")

// Crie uma função que recebe um numero pro parametro e informa se ele é par ou impar

function parImpar(params) {
    if (params % 2 === 0) {
        console.log("Par");
    } else {
        console.log("impar");

    }
}
parImpar(5)

// faça 4 funções (soma, subtração, divisão, nultiplicação) que recebem dois numero como parametro e retorna da operação

function soma(a, b) {
    let soma2 = a + b;
    return soma2
}
const soma2 = soma(4, 5)
console.log(soma2);

function sub(a, b) {
    let sub2 = a - b;
    return sub2
}
const sub2 = sub(4, 5)
console.log(sub2);

function div(a, b) {
    let div2 = a / b;
    return div2
}
const div2 = div(584, 50)
console.log(div2);

function mult(a, b) {
    let mult2 = a * b;
    return mult2
}
let num = 2
let num2 = 5
const mult2 = mult(num, num2)
console.log(mult2);

function soma3(a, b) {
    return a + b
}
function subtracao(a, b) {
    return a - b
}
function multiplicacao(a, b) {
    return a * b
}
function divisao(a, b) {
    return a / b
}

console.log(soma3(3, 5));
console.log(divisao(3, 5));
console.log(subtracao(3, 5));
console.log(multiplicacao(3, 5));


// fazer uma função para retornar qual é maoir entre 2 numero usando parametro
function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(maiorNumero(984, 9));

//exemplo 2

function maiorNumero2(a, b) {
    if (a > b) return a
    return b
}
console.log(maiorNumero2(3, 9));

// exemplo 3

function maiorNumero3(a, b) {
    return (a > b) ? a : b
}
console.log(maiorNumero3(3, 98));

// Escreva uma função que recebe as 3 notas de uma aluno por parametro e uma letra
// se a letra for A calcule a média aritimetica das notas do aluno
// se a letra for P calcule a média ponderada (pesos 5, 3 e 2)

function media(a, b, c, letra) {
    if (letra === "A") {
        return (a + b + c) / 3
    }
    else if (letra === "P") {
        return (a * 5 + b * 3 + c * 2) / 10
    }
}

let media_aritimetica = media(10, 9, 8, "P")

console.log(media_aritimetica)

// Funções Anônimas

const calcMediaAritimetica = function (n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
const calcMediaPonderada = function (n1, n2, n3) {
    return (n1 * 5 + n2 * 3 + n3 * 2) / 10
}

const calcMedia = function (n1, n2, n3, funcaoMedia) {
    return funcaoMedia(n1, n2, n3)
}

console.log(calcMedia(8, 10, 6, calcMediaAritimetica))
console.log(calcMedia(8, 10, 6, calcMediaPonderada))


// faça as 4 funçoes (soma, subtração, divisão, multiplicação) como função anônimas

const fazTudo = function (a, b, funcao) {
    return funcao(a, b)
}

console.log(fazTudo(8, 6, soma3));
console.log(fazTudo(8, 6, subtracao));
console.log(fazTudo(8, 6, multiplicacao));
console.log(fazTudo(8, 6, divisao));

// ArrowFunc

const ArrowFunc = () =>{
    console.log("Arrow function")   
}
ArrowFunc();

const soma4 = (x) => x + 2

console.log(soma4(3))

// faça as 4 funçoes (soma, subtração, divisão, multiplicação) como arrow function


const soma5 = (a,b) => a + b
const sub3 = (a,b) => a - b
const div3 = (a,b) => a/b
const mult3 = (a,b) => a*b

const fazTudo2 = (a,b,func) => func(a,b)



console.log(fazTudo2(10,5, soma5));
console.log(fazTudo2(10, 5, sub3));
console.log(fazTudo2(10, 5, div3));
console.log(fazTudo2(10, 5, mult3));



