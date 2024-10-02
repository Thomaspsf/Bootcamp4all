const pessoas = ["igor", "thomas","Jose","rafael"]

console.log(pessoas);
console.log(pessoas[0]); //igor
console.log(pessoas[1]); //thomas
console.log(pessoas[2]); //jose
console.log(pessoas[3]); //rafael
console.log(pessoas[4]); // undefine => Não existe

const test = ["test", 10, true, "Ola", null]
console.log(test);

console.log(pessoas.length); // tamanho do meu arry

pessoas.push("mario")

console.log(pessoas); // adiciona elementos na ultima posição

pessoas.unshift("bowser") // adiciona elementos na primeira posição

console.log(pessoas);

pessoas.pop() // remove o elemento no final
console.log(pessoas);

pessoas.shift() // remove o elemento no inicio
console.log(pessoas);

// crie um arry com varios numero e calcule a média desses valores

const notas = [5,7,8,5,9]
let media
console.log(media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4])/ notas.length);

let soma = 0

for (let index = 0; index < notas.length; index++) {
    const element = notas[index];
    soma = soma + element  
}

console.log(soma/notas.length);


// crie uma arry com dez numero, calcule e mostre a quantidade de mumeros negativos e a soma dos numeros
//positivos desse arry

const numNeg = []

const numeros = [-10, 3, -4, 5, 6,-4, 3, 5, 9,-29]
let soma2 = 0
for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] < 0) {
        numNeg.push(numeros[index])
    }  else{
        soma2 += numeros[index]
    }
}
console.log(numNeg.length, soma2);

console.log(numNeg)

//crie um array de 10 elementos, e utilize um for para buscar a posição de uma valor dentro do array
//arr >[4,5,3]
//valor > 5
//resultado > 1

//arr >[4,5,3]
//valor > 10
//resultado > -1 (não encontrado)


// usando for

const numero2 = [-10, 3, -4, 5, 6,-4, 3, 5, 9,-29]
let x = 3;
let pos = -1
for(let i = 0; i < numero2.length; i++){
    if (x === numero2[i]){
        pos = i
    }
}

console.log(pos)


// usando uma função

