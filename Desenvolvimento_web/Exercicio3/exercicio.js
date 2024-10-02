//passo 2
let quadros = document.querySelector("#resolution1 .square");
quadros.style.backgroundColor = "#fdd";

//passo 3
let quadro2 = document.querySelector("#resolution2 .square");
quadro2.innerHTML = "<p>Teste de exemplo</p>";
quadro2.style.textAlign = "lest";

//passo 4

quadros.onmouseover = function(){
    quadros.style.border = "2px #000 solid";
};
quadro2.onmouseover = function(){
    quadro2.style.border = "2px #000 solid";
};