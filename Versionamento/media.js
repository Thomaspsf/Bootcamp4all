/*Criar uma arquivos chamado media.js
-Dentro deste arquivo vocês devem implementar, ultilizando javascript, um código que dado 3 notas de um 
 aluno calcule a media do mesmo, e então exiba:
    Se a media for maior ou igual a 6 , o aluno foi aprovado
    caso contrario o aluno foi reporvado
Alem disso, editem o arquivo frutas.js inserindo uma nova fruta no final do array e exibindo ela por console.log
*/

const notas = [5,1,8]
let soma = 0

const media = (notas) => {
    for(i = 0; i < notas[i]; i++){
    soma += notas[i]
}
if ((soma / notas.length) >= 6){
    console.log("Aprovado");
    
} else {
    console.log("Reporvado");  
}
}
media(notas);