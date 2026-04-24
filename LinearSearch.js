//#region Pesquisa Linear

//1. Passar por todos os elementos do array;

//2. Verificar se o valor a ser encontrado existe dentro do array

//3. Se encontrar, retornar o valor do index(Ex:. arr[3] == valor selecionado)

//4. Se não encontrar, retornar -1 para indicar q o valor não existe dentro array

let arr = [4,7,2,9,4,0]
let n = arr.length

let value = 7
let swapped

for(let i = 0; i < n; i++){
    swapped = false
    if(value == arr[i]){
        console.log(`index ${i} = ${value}. YUPIII!!`)
        swapped = true
        break
    }
    else if(!swapped) {
        console.log("Num tem esse valor bixo burro!")
    }
        
        
}