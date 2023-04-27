let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var pares = []
var multiplos5 = []

// for possui um índice, uma condição e um incremento

// length= conta quantos elementos tem dentro da lista

// tem que ser menor, pois a lista começa no 0

// índice pega a posição da lista, independente do elemento

// console.log(lista[1]): mostra o elemento da posição 1

//  console.log(lista[indice]): mostra todos os elementos

for (let indice = 0; indice < lista.length; indice++) {
    var resto = lista[indice] % 2

    if (resto == 0){
        pares.push(lista[indice])
    }
}


// multiplos de 5
for (let indice = 0; indice < lista.length; indice++) {
    var resto = lista[indice] % 5

    if (resto == 0){
        multiplos5.push(lista[indice])
    }
}

// palavras filter
let palavras = ["Henri", "Nicolas", "Lara", "Miguel", "Basqueroto", "Murilo", "Gustavo"]
var M5L = palavras.filter (function (elemento){
    return elemento.length>5
})
    
//  palavras for
let pf = ["Henri", "Nicolas", "Lara", "Miguel", "Basqueroto", "Murilo", "Gustavo", "Luiz"]
var M5L2 = []

for (let indice = 0; indice < pf.length; indice++) {
    var M5L3 = pf[indice]

    if(M5L3.length > 5){
        M5L2.push(pf[indice])
    }    
}    

// média

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var media = []
var soma = 0

for (let indice = 0; indice < num.length; indice++) {
    soma += num[indice] 
}    

media = soma / num.length  

// média Polato

// +prompt adicona a caixa de texto
// document.write 
var qtdnum = +prompt("Quantos números você quer somar?");
var soma = 0;

for (var i = 0; i < qtdnum; i++){
    var num2 = +prompt("Informe o número " + (i+1) + ":");
    soma += num2;
}

var media = soma / qtdnum
document.write("A média é: ", media.toFixed(2))

