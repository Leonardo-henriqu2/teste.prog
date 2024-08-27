// C - Numeros pares 
// Nesse exercicio o usuario atribui diretamente um numero qualquer na variavel 'numero' abaixo.
// A funcao na linha 7 irá executar e exibirá todos os números pares antecessores do respectivo numero
//do usuario 

let numero = 20

function numerosPares (x){
    for(let i = 2; i <= x; i+=2){
        console.log(i)
    }
}
numerosPares(numero)