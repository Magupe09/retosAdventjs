/*
Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3
*/
const tree = {
    value: '🎁',
    left: {
        value: '🎄',
        left: {
            value: '⭐',
            left: null,
            right: null
        },
        right: {
            value: '🎅',
            left: null,
            right: null
        }
    },
    right: {
        value: '❄️',
        left: null,
        right: {
            value: '🦌',
            left: null,
            right: null
        }
    }
}


function treeHeight(objeto) {
    if (objeto === null) {
        return 0;

    } else {
        if (objeto.left === null && objeto.right === null) {
            //console.log('soy hoja nivel 1')
            return 1
        } else {
            //console.log('soy otro nodo nivel 2')
            const segundoNivelLeft = treeHeight(objeto.left)
            const segundoNivelRight = treeHeight(objeto.right)
            //console.log(segundoNivelLeft, segundoNivelRight)
            const altura= 1+Math.max(segundoNivelLeft,segundoNivelRight)
            console.log(altura)
            return altura

        }
    }

}

/*
Codigo refactorizado
function treeHeight(node) {
    // Caso base: árbol vacío
    if (node === null) {
        return 0;
    }

    // Caso recursivo: para cualquier nodo no-null (hoja o interno)
    // Calcula la altura del sub-árbol izquierdo llamando recursivamente
    const heightLeft = treeHeight(node.left);
    // Calcula la altura del sub-árbol derecho llamando recursivamente
    const heightRight = treeHeight(node.right);

    // La altura desde este nodo es 1 + el máximo de las alturas de los hijos
    return 1 + Math.max(heightLeft, heightRight);
}
 */



// Llamada a la función
treeHeight(tree)
// Devuelve: 3