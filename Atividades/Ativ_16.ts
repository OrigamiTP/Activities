/*Diferenças entre 'let', 'var' e 'const'*/

/*
Escreva um código com um bloco if e um bloco for. Dentro de cada um, declare variáveis com let,
const e var. Depois, fora desses blocos, tente acessar cada uma dessas variáveis e observe o
que acontece — quais são acessíveis e quais causam erro. Escreva um comentário no código
explicando por que cada resultado aconteceu.
*/
const timer = 9

if(timer <= 10){

    var variavel = 10
    const constante = 10
    let isGo = 10
    
    console.log(`Inside if conditional: ${variavel}, ${constante}, ${isGo}`)
}
//tô tentando acessar variáveis locais, fora do escopo delas
console.log(`Outside if conditional: ${variavel}, ${constante}, ${isGo}`)

for(let i = 0; i <= timer; i++){
    console.log(i + 1)
}