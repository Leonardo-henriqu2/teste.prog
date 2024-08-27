// B - Contagem de Vogais
// Nesse exercicio podemos executar nosso script aqui mesmo no editor de codigos 

// Solicita a entrada da string pelo usuário
let string = 'leonardohenrique'

// Define uma variável para armazenar a contagem de vogais
let contagemVogais = 0;

// Define as vogais que serão consideradas
let vogais = "AaEeIiOoUu";

// Loop para percorrer cada caractere da string
for (let i = 0; i < string.length; i++) {
    // Verifica se o caractere atual é uma vogal
    if (vogais.includes(string[i])) {
        contagemVogais++;
    }
}

// Exibe a contagem de vogais
console.log("Número de vogais: " + contagemVogais);
