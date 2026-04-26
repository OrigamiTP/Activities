/*Tabuada com for loop*/

/*
Escreva um código que gere e exiba no console a tabuada completa dos números de 1 a 5. Cada
linha deve ter o formato: "X × Y = Z". Use laços "for" para automatizar a geração — você não
deve escrever cada linha manualmente. Organize a saída de forma que fique fácil de ler,
separando cada tabuada com uma linha em branco.
*/

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 10; j++)
        console.log(`${i} * ${j} = ${i*j}`)
}