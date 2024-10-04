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
let teste = [10, 9, 10, 1, 2, 3, 4, 5, 6]
const nums = [-10, 2, 100, -1, 40, -2, 0]

let qtdNumsNegativos = 0
let soma3 = 0
for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < 0) {
        qtdNumsNegativos++
    } else {
        soma3 += num
    }
}

console.log("Soma dos numeros positivos é:", soma3)
console.log("qtd dos numeros negativos é:", qtdNumsNegativos)

const nums2 = [10, 34, 78, 3, 7, 10, 2, 90, 9, 0]

const n = 9
let pos23 = -1
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] === n) pos23 = i
}
console.log(pos23)

const findIndex = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i
    }
    return -1
}
console.log(findIndex(nums2, 100))

const ehImpar = (value) => value % 2 !== 0
const pos2 = nums2.findIndex(ehImpar)
console.log(pos2)

const findIndex2 = (arr, ehOValorEsperado) => {
    for (let i = 0; i < arr.length; i++) {
        if (ehOValorEsperado(arr[i])) return i
    }
    return -1
}

console.log(findIndex2(nums2, ehImpar))

//encontrar a posisão dentro de um array





//forEach

console.log("ForEach:")
let soma4 = 0
teste.forEach((value) => {
    soma4 += value
})
console.log(soma4)

const teste2 = teste.map((value) => {
    return value + 2
})
console.log(teste)
console.log(teste2)

const media2 = [10, 4, 6, 7, 3]

const foiAprovado = (media2) => {
    if (media2 >= 6) return true
    else return false
}

const aprovados = media2.map(foiAprovado)
console.log(media2)
console.log(aprovados)

for (let i = 0; i < media2.length; i++) {
    const aprovado = foiAprovado(media2[i])
    console.log(aprovado)
}


// multiplique todos os elementos de uma array por 2

const novoMedia = media2.map((value) => {
   return value * 2
})

console.log(novoMedia);

// transformar um array de numeros em um array de seus quadrado

const novoMedia2 = media2.map((value) => {
    return value * value
 })
 
 console.log(novoMedia2);

 // Encontrar o primeiro número par em um array

const ehpar = (value) => {return value % 2 == 0}
const posisao = media2.findIndex(ehpar)

console.log(media2[posisao]);

const soImpar =[]
media2.forEach(element => {
        if (element % 2 !== 0) {
            soImpar.push(element)
        }
    });
console.log(soImpar);

//função "Filter" filtra um array baseada no parametro que passar se for verdadeiro ele mantem no array se não ele tira

arraySoImpar = media2.filter((value) => value % 2 !== 0) 
console.log(arraySoImpar);


// verificar se todos os numero em um array são positivos
let ver = true
teste.forEach(element => {
    if (element < 0) {
        ver = false
    }
});
console.log(ver);

// usando função

const todosPositivos = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const elementos2 = arr[i]
        if (elementos2 < 0) return false
    }
    return true
}

console.log(todosPositivos(nums));

// usando função "every" Verifica todos os elementos de uma condição passada pra ele

