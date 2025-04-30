/*
Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]
*/
function findMissingNumbers(nums) {
    const max= Math.max(...nums)
    const arrayFaltantes=[]
    console.log('El numero maximo es',max)
    for(i=1;i<=max;i++){
        if(!nums.includes(i)){
          arrayFaltantes.push(i)
        }
    }
    console.log(arrayFaltantes)
    return [...arrayFaltantes]
  }

 findMissingNumbers([5, 5, 5, 3, 3, 2, 1])
  // [4]

  
findMissingNumbers([3, 2, 1, 1])
// []
findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]