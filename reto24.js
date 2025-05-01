/*
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

Las raíces de ambos árboles tienen el mismo valor.
Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.


const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              ⭐
  / \             / \
⭐   🎅         🎅   ⭐
*/

function isTreesSynchronized(tree1, tree2) {
    console.log(tree1, tree2)
    function areNodesMirrored(node1, node2) {
        if (node1 === null && node2 === null) {
            return true; // Son espejos si ambos son null
        }
        if (node1 === null || node2 === null) {
            return false; // No son espejos si solo uno es null (y el otro no, por el paso anterior)
        }
        if (node1.value !== node2.value) {
            return false; // No son espejos si sus valores no coinciden (y ambos existen)
        }
        const leftMirrorRight = areNodesMirrored(node1.left, node2.right); // ¿Izquierdo de 1 es espejo de Derecho de 2?
        const rightMirrorLeft = areNodesMirrored(node1.right, node2.left);

        return leftMirrorRight && rightMirrorLeft;
    }

    const sonEspejos = areNodesMirrored(tree1, tree2)
    return [sonEspejos, tree1.value]


}

const tree1 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

const tree2 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '⭐' },
}
isTreesSynchronized(tree1, tree2) // [true, '🎄']
const tree3 = {
    value: '🎄',
    left: { value: '🎅' },
    right: { value: '🎁' }
}

//isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
    value: '🎄',
    left: { value: '⭐' },
    right: { value: '🎅' }
}

//isTreesSynchronized(tree1, tree4) // [false, '🎄']

//isTreesSynchronized({ value: '🎅' },{ value: '🧑‍🎄' }) // [false, '🎅']

