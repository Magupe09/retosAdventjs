/*
Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales
*/

function execute(code) {
    let count = 0;
    let pointer = 0;
    const openToCloseMap = {}; // Mapa: indice de apertura -> indice de cierre
    const closeToOpenMap = {}; // Mapa: indice de cierre -> indice de apertura
    const stack = []; // Guardará índices de '[' o '{'

    for (let i = 0; i < code.length; i++) {
        const char = code[i];
        if (char === '[' || char === '{') {
            stack.push(i);
        }else if (char === ']' || char === '}') {
            // Sacas el índice de la apertura correspondiente de la pila
            const openIndex = stack.pop();
        
            // Ahora que tienes la pareja (openIndex e i), la guardas en ambos mapas
            openToCloseMap[openIndex] = i;
            closeToOpenMap[i] = openIndex;
        }
    }

    //console.log(code, code.length)
    function findMatchingBracket(code, openBracketIndex) {
        let countLLaves = 0
        for (let j = openBracketIndex + 1; j < code.length; j++) {
            if (code[j] === "{") {
                countLLaves += 1;
            } if (code[j] === "}") {
                countLLaves -= 1;
            }
            if (code[j] === "]" && countLLaves === 0) {
                return j;
            }
        }


    }
    function findMatchingBrace(code, openBraceIndex) {
        let countCorchete = 0
        for (let j = openBraceIndex + 1; j < code.length; j++) {
            if (code[j] === "[") {
                countCorchete += 1;
            } if (code[j] === "]") {
                countCorchete -= 1;
            }
            if (code[j] === "}" && countCorchete === 0) {
                return j;
            }
        }
    }

    while (pointer < code.length) {
        const instruccion = code[pointer];
        if (instruccion === '+') {
            count += 1;
            pointer += 1;
        } else if (instruccion === '-') {
            count -=1;
            pointer += 1;
        } else if (instruccion === '>') {
            pointer += 1;
        } else if (instruccion === "[") {
            if (count === 0) {
                const cierreCorchete = findMatchingBracket(code, i)
                pointer = cierreCorchete + 1;
            } else {
                pointer += 1;
            }
        } else if (instruccion === ']') {
            if (count !== 0) {
                const openBracketIndex = closeToOpenMap[pointer];
                pointer = openBracketIndex + 1;
            } else {
                //si el valor es 0,salta despues del cierre!
                pointer += 1;
            }
        } else if (instruccion === "{") {
            if (count === 0) {
                const cierreLlaves = findMatchingBrace(code, pointer)
                pointer = cierreLlaves + 1
            } else {
                // si count no es 0
                pointer += 1;
            }


        } else if (instruccion === '}') {
            //Fin de la condicional solo avanza
            pointer += 1;
        }


    }


    console.log(count)
    return count;
}

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5