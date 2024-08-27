// Parte 2: Exercício Lógica de Programação 
// A - Reverso de String
// Esse script está implementado no index.html rodando direto no navagador

// Solicita que o usuário digite alguma palavra qualquer no navegador
let palavra = prompt("Digite uma palavra:");

// O método split irá dividir a string em um array de caracteres.
// Depois o reverse nesse caso irá inverter a ordem dos elementos de mesmo array
// Por fim o join unirá novamente em um string

let palavraInvertida = palavra.split("").reverse().join("");

// Exibe a palavra invertida
console.log("Palavra invertida: " + palavraInvertida);
