/*
Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉
*/
function generateGiftSets(gifts) {
    const resultado=[];
    const totalToys=gifts.length;

   for(let tamaño=1 ; tamaño<=totalToys;tamaño++){
     function recursion(indiceActual,combinacionParcial,tamañoObjetivo,juguetesOriginales,listaResultados){
        if(combinacionParcial.length === tamañoObjetivo){
            resultado.push([...combinacionParcial])
            return
        }
        for (let i = indiceActual; i < juguetesOriginales.length; i++) {
          combinacionParcial.push(juguetesOriginales[i])
          const segundaRecursion= recursion(i+1,combinacionParcial,tamañoObjetivo,juguetesOriginales,listaResultados)
          combinacionParcial.pop();
          
        }
     }
     const combinaciones=recursion(0,[],tamaño,gifts,resultado);
   }
       
   
   console.log(resultado)
   return resultado
    
  }
  generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]