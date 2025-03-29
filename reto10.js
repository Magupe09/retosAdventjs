/* Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
INC x: Incrementa en 1 el contenido del registro x
DEC x: Decrementa en 1 el contenido del registro x
JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
Comportamiento esperado:
Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
El salto con JMP es absoluto y lleva al índice exacto indicado por y.
Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 
Nota: Los registros que no han sido inicializados previamente se inicializan a 0.
*/

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

function compile(instructions) {
  // Code here
  const registers = {};
  let index = 0;

  while (index < instructions.length) {
    const [command, ...args] = instructions[index].split(' ');

    switch (command) {
      case 'MOV':
        if (isNaN(args[0])) { // Si el primer argumento no es un número, es un registro
          registers[args[1]] = registers[args[0]] || 0; // Asigna el valor del registro al destino
        } else {
          registers[args[1]] = parseInt(args[0]); // Asigna el valor numérico
        }
        break;
      case 'INC':
        registers[args[0]] = (registers[args[0]] || 0) + 1;

        break;
      case 'DEC':
        registers[args[0]] = (registers[args[0]] || 0) - 1;

        break;
      case 'JMP':
        if ((registers[args[0]] || 0) === 0) {
          index = parseInt(args[1]) - 1;
        }
        break;



    }

    index++;
    //return console.log(registers, 'registers')
  }
  return console.log(registers.hasOwnProperty('A') ? registers['A'] : undefined);

}

compile(instructions)