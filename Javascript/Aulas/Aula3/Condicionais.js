const verdadeiro = true
const falso = false

console.log(verdadeiro)
console.log(falso)

const idade = 65
// simbolode igual
console.log(idade == 64) // false
console.log(idade == "65") // true
console.log(idade === 65) // true novo metodo
console.log(idade === "65") //false
// simbolo de diferente
console.log(idade != 26) //true
console.log(idade != "26") //true
console.log(idade !== 65) //false novo metodo
console.log(idade !== "65") //true
// simbolo maior e menor
console.log(idade < "10") // false
console.log(idade < "100")
console.log(idade > "10")
// simbolo maior e igual

console.log(idade <= 68)
console.log(idade >= 65)


// verifique se o numero 15 é maior que 10 e exiba o resultado no console
//verifique se o 2 é diferente de 20 e exiba o resultado no console
// verifique se 1 é maior ou igual a 1 e exiba o resultado no console

const numero = 15
console.log(numero > 10)

const numero2 = 2
console.log(numero2 !== 20)

const numero3 = 1
console.log(numero3 >= 1)


// operadores && as todas tem que ser verdadeiro para dar resultado verdadeiro

console.log(true && true) // true
console.log(false && true) // false

const n1 = 1
console.log(n1 < 100 && n1 > 10)

// operador || se uma for verdadeiro tudo vai ser verdadeiro pra dar o resultado verdadeiro

console.log(true || true)
console.log(false || true)
console.log(false || false)
console.log(true || true)

const n2 = 10
console.log(n1 === 100 || n1 === 10)

// operador de negação ! ele inverte o resoltado do boolean

console.log(!(n2 > 50))

// dadas duas variaeis booleanas A e B , escreva um codigo  que calcule  o resultado da operação logica A e B

const a = true
const b = false

console.log(a && b)

// dadas duas variaeis booleanas C e D , escreva um codigo  que calcule  o resultado da operação logica C ou D

const C = true
const D = false

console.log(C || D)

// dadas duas variaeis booleanas E e F , escreva um codigo  que calcule  o resultado da operação logica E negar F

const E = true
const F = false

console.log(!(E && F))

// dadas uma variavel x verifique se, x > 0 e  X < 7

const x = 8
console.log(x > 0 && x < 7)

// IF e ELSE

const idade2 = 18

if (idade >= 18) {
    console.log("beber cerveja")
} else {
    console.log("beber refri")
}

// escreva uma condicional que verifique se um numero é positivo. se for, exiba número positivo no console

const positivo = 10
if (positivo >= 0) {
    console.log("positivo");
}

//Crie uma condicional que verifique se uma pessoa tem idade sufuciente para volat (18 anos ou mais) exiba pode voltar
//ou não pode voltar
const votar = 17
if (votar >= 18) {
    console.log("Pode votar");
} else {
    console.log("nâo pode votar");
}

//Escreva um código que classifique a faixa etária de uma pessoa com base em sua idade
//"Criança" (0 -12), Adolecente (13-17) adulto (18-59) idoso (60+)4

const idade3 = 2

if (idade3 >= 0 && idade3 <= 12) {
    console.log("Criança");
} if (idade3 >= 13 && idade3 <= 17) {
    console.log("Adolecente");
} if (idade3 >= 18 && idade3 <= 59) {
    console.log("Adulto");
} if (idade3 >= 56) {
    console.log("Idoso");
}


// verifique se um numero esta entre 10 e 20 ou entre 40 e 50

const entre = 39

if ((entre >= 10 && entre <= 20) || (entre >= 40 && entre <= 50)) {
    console.log("entre");
}

//escreva um programa que verifica se um numero é par ou impar. exiba uma mensagem 
//informando se o numero é par ou impar
const parimp = 42
if (parimp % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}
// escreva um programa que informe o status de um aluno baseado em sua nota
//maior que 7 aprovado
//entre 7 e 4 recuperação
//menor que 4 reprovado

const nota5 = 3

if (nota5 > 7) {
    console.log("aprovado");
} else if (nota5 >= 4) {
    console.log("Recuperação");
} else {
    console.log("reprovado");
}

//Switch case

const dia = 1

switch (dia) {
    case 1:
        console.log("segunda");
        break;
    case 2:
        console.log("terça");
        break
    case 3:
        console.log("quarta");
        break
    default:
        break;
}

//Escrava um switch case que recebe um numero de 1 a 12 e imprima o nome do mês correspendente

const mes = 11

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Desembro");
        break;
    default:
        console.log("Coloque um numero de 1 a 12 para um resultado");
        break;
}

// escreva um switch case que classifica uma nota (a, b ,c, d, f) e imprima uma mensagem apropriada
// ememplo a excelente b bom c razoavel d insuficiente f reprovado

const nota6 = "B"

switch (nota6) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Razoável");
        break;
    case "D":
        console.log("Insuficiente");
        break;
    case "F":
        console.log("Reprovado");
        break;
    default:
        break;
}
// Escreva um switch case que converte valores de uma moeda para outra com base em uma taxa fixa
//taxa  dolar:2x euro: 2x real: 1.2x libra: 2.3

const moeda = "libra"
const valor = 10

switch (moeda) {
    case "dolar":
        console.log(valor * 2);
        break;
    case "euro":
        console.log(valor * 2);
        break;
    case "real":
        console.log(valor * 1.2);
        break
    case "libra":
        console.log(valor * 2.3);
        break
    default:
        break;
}

// escreva u switch case para traduzir códigos para comandos de um controle remoto
// 1-3 liga/desliga 10 aumenta volume 11: dimunir volume 20-22: avançar canal 30 ou 15 voltar canal


const controle = 15

switch (controle) {
    case 1:
        console.log("Ligar/desligar");
        break;
    case 2:
        console.log("Ligar/desligar");
        break;
    case 3:
        console.log("Ligar/desligar");
        break;
    case 10:
        console.log("Aumenta volume");
        break;
    case 11:
        console.log("diminui volume");
        break;
    case 20:
        console.log("avança canal");
        break;
    case 21:
        console.log("avança canal");
        break;
    case 22:
        console.log("avança canal");
        break;
    case 30:
        console.log("volta canal");
        break;
    case 15:
        console.log("volta canal");
        break;

    default:
        break;
}

