//#region BubbleSort Example

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  for (let i = 0; i < n; i++) {
    swapped = false;
    
    // Optimization: Inner loop ignores already sorted elements at the end
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements using ES6 destructuring
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no elements were swapped, the array is already sorted
    if (!swapped) break;
  }
  return arr;
}

const numbers = [5,3,8,2,0,1,7];
console.log(bubbleSort(numbers));
// 

//#endregion

//#region BubbleSort Exercise
/*
function BubbleSort(arr){
  let n = arr.length
  let swapped

  for(let i = 0; i < n; i++){
    swapped = false

    for(let j = 0; j < n - i - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j],arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
      }
      if(!swapped) break
    }
  }
  return arr
}
const array = [20, 67, 23, 91, 46, 19, 84]
console.log(BubbleSort(array))
*/
//#endregion

//#region BinarySearch

//1. Verificar o valor central duma lista previamente organizada

/*
2. Se o valor central for menor q o valor a ser escolhido, o código irá para a metade da segunda metade da lista,
para verificar a mesma coisa de antes, só q num lugar mais alto.

Senão se for maior q o valor escolhido, o código irá para a metade da primeira metade da lista e fazer a mesma 
coisa num lugar mais baixo
*/

//3. Continuar fazendo os passos 1 e 2, diminuindo a área de procura para encontrar o valor selecionado

//4. Se encontrado retornar o index q ele foi encontrado, senão retornar -1 para indicar q ele não foi encontrado



//#endregion