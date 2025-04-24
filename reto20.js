/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
*/

function fixGiftList(received, expected) {
    let inventarioReal = received;
    let inventarioTeorico = expected;


    // La función reductora que construirá el objeto contador
    function contarRegalos(contador, nombreRegaloActual) {
        // 'contador' es el objeto que se está construyendo (el acumulador)
        // 'nombreRegaloActual' es la string del regalo en la iteración actual

        // 1. Verificar si el regalo actual ya existe como clave en el objeto contador
        if (contador[nombreRegaloActual]) {
            // 2. Si existe, incrementar su valor (el conteo)
            contador[nombreRegaloActual]++;
        } else {
            // 3. Si no existe, añadirlo al objeto con un valor inicial de 1
            contador[nombreRegaloActual] = 1;
        }

        // *** MUY IMPORTANTE: Retornar el objeto contador actualizado ***
        // Este objeto retornado será el 'acumulador' en la *siguiente* llamada a la función.
        return contador;
    }

    // Llamar a reduce
    const conteoFinalReal = inventarioReal.reduce(contarRegalos, {});
    const conteoFinalTeorico = inventarioTeorico.reduce(contarRegalos, {});

    const missing = {};
    const extra = {}
    const keys1 = Object.keys(conteoFinalReal);
    const keys2 = Object.keys(conteoFinalTeorico);
    const allUniqueKeys = [...new Set([...keys1, ...keys2])];

    //console.log(conteoFinalReal, conteoFinalTeorico, allUniqueKeys)

    
   // console.log(cantidadReal, cantidadTeorica, resta)
    for (i = 0; i < allUniqueKeys.length; i++) {
        const cantidadReal = conteoFinalReal[allUniqueKeys[i]] || 0;
        const cantidadTeorica = conteoFinalTeorico[allUniqueKeys[i]] || 0;
        const resta = cantidadTeorica - cantidadReal
        if (resta > 0) {
            //console.log('faltan regalos')
            missing[allUniqueKeys[i]] = resta;
        } else if (resta < 0) {
           // console.log('sobran regalos')
            extra[allUniqueKeys[i]] = cantidadReal - cantidadTeorica;
        } else {
           // console.log('son los mismos')
        }
    }

    console.log({missing,extra})
    return {
        missing,
        extra
    }
}

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }
fixGiftList(
    ['bear', 'bear', 'car'],
    ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }
fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
