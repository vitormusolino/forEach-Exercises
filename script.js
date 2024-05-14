const pessoas = ["Fulano","Ciclano","Beltrano"]

//Adiciona um elemento ao final do array
// pessoas.push("Caio")
// Remove o último elemento do array
// pessoas.pop()
// Adiciona um elemento no ínicio do array
// pessoas.unshift("Vitor")
// Remove o primeiro elemento do array
// pessoas.shift()
//Atualizar o valor de um array
// pessoas[1] = "Vitor"
// console.log(pessoas)

//For para passsar em cada posição do array
// pessoas.forEach(
//     function rodarArray(pessoa){
//         console.log(pessoa + " vai Palmeiras!")
//     }
// );

//pessoas.forEach(pessoa=> console.log(pessoa))

// pessoas.map(pessoa => console.log(pessoa +"!"))

// function mudarPessoas(){
//     return pessoas.map(pessoa => console.log(pessoa + "!"))
// }

// const numeros = [1,2,3,4,5]

// function dobrarNumero(lista){
//     return lista.map(numero => console.log(numero * 2))
// }

//dobrarNumero(numeros);

const lista1 = ["amor","maçã","banana","felicidade"]

function mudarPalavra(lista){
    return lista.map(palavra => console.log(palavra.toUpperCase()))
}

mudarPalavra(lista1);