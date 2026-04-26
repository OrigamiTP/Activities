/*Contador com while*/

/*
Crie uma variável "contador" com valor 1. Usando um laço "while", exiba no console todos os
números ímpares de 1 até 50. O laço deve parar automaticamente quando o número ultrapassar
50. Não use arrays — apenas o laço e a variável.
*/

let contador = 1

while(contador <= 50){

    if(contador % 2 == 1){
        console.log(contador)
    }

    contador++
}