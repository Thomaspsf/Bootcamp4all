
//soma com loop
let soma = 0
for (let i = 1; i <= 10; i++) {
   soma = soma + i    
}
console.log(soma);


// calcule e imprima a tabuada de multiplicação de um numero
const numero = 9


for (let mult = 1; mult <= 10; mult++) {
    console.log(`${numero} X ${mult} = ${mult * numero}`);    
}


// escrever uma algoritimo que gera e escreve os numeros impares entre 100 e 200

for (let index = 100; index <= 200; index++) {
    if (index % 2 != 0) {
        console.log(index)
    } 
    
}

//desenvolver uma algoritimo que efetuar a soma de todos os numeros impares que são multiplos
// de tres e que se encontram no conjunto dos numeros 1 ate 500
let contador = 0
for (let index = 1; index < 500; index++) {
    
    if (index % 3 === 0 && index % 2 !== 0) {
        contador = contador + index
    }
    
}
console.log(`o valor da soma do impares multiplos de três é: ${contador}`);

// while

// dobre um numero enquanto ele for menor do que 1000

let x = 2;
while (x < 1000){
    console.log(x);
    x *= 2
}

// do while

let y = 10
do {
    console.log("entrei");
    
} while (y > 100);

// escreva um loop que simule o lançamento de um dado até que um numero especifico seja obtido e conte quantas tentativas forem necessarias.

// para obter um numero aleartorio de 1 a 6
//let resiltado = Math.floor(Math.random()*6)+1


let esperado = 4;
let tentativas = 0;
let resultado = 1;
do {
    resultado = Math.floor(Math.random()*6)+1
    console.log(resultado);
    tentativas++;
    console.log("tentativas",tentativas);
    
} while (resultado !== esperado);

//escreva uma algoritimo que receba valor inicial A e imprima seu fatorial

let valor = 4;
let temp = 1;
for (let index = 1; index <= valor; index++) {
    temp = temp * index;
    console.log(temp);
}

// exiba no console o seguiente padrão utilizando loop
// *
// **
// ***
// ****

let valor1 = 4;
let temp1 = 1;
for (let index = 1; index <= valor1; index++) {

}

for (let i = 0; i < 5; i++){
    let linha = "*"
    for (j = 0; j < i; j++){
        linha = linha + " *"
    }
    console.log(linha);
    
}


for (let i = 0; i < 5; i++){
    let linha = "* * * * *"
    for (j = 0; j < i; j++){
        linha = linha - " *"
    }
    console.log(linha);
    
}
