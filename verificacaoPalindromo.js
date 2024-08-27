// D - verificacao de palindromo
// a funcao desse bloco basicamente deixa todos os caracteres caixa baixo da string da variavel 'expressao' que eu usei e esse replace da linha 6 irá tirar todos os espaços em branco da string geral.
//Em seguida, na linha 10 fará o mesmo procedimento do exercicio de inversao apresentado anteriormente 
// Finalizando na linha 14, o algoritmo compara se a expressao inicial é expremamente igual a sua respectiva inversao. 

function verificaPalindromo(expressao) {
    // Remove espaços, pontuações e converte para minúsculas
    expressao = expressao.toLowerCase().replace(/[\W_]/g, "");

    // Inverte a string
    let expressaoInvertida = expressao.split("").reverse().join("");

    // Compara a string original com a string invertida
    return expressao === expressaoInvertida;
}

// Exemplo de uso:
let palavra = 'subi no onibus'
if (verificaPalindromo(palavra)) {
    console.log("É um palíndromo");
} else {
    console.log("Não é um palíndromo");
}
