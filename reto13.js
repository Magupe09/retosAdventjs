/*

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

*/

function isRobotBack(moves) {
  // Code here
  let x = 0;
  let y = 0;
  let invertir = false;
  let duplicar = false;
  let condicional = false;
  let movimientosHechos = new Set();

  const opciones = {
    'R': () => x++,
    'L': () => x--,
    'U': () => y++,
    'D': () => y--
  }

  for (i = 0; i <= moves.length - 1; i++) {
    if (moves[i] === '*') {
      
       duplicar = true;
      
    } else if (moves[i] === '!') {
      invertir = true;
    } else if (moves[i] === '?') {
      condicional = true;
    } else if (moves[i] === 'U') { // ............U
     
      if(condicional){
        if(movimientosHechos.has(moves[i])){
          condicional=false;
          continue;
        }else{
          movimientosHechos.add(moves[i]);
          
          opciones['U']();
          condicional=false;
          continue;
        }
      }
      let movimientoActual = moves[i];

    
      if (invertir) {
        if (movimientoActual === 'L') movimientoActual = 'R';
        else if (movimientoActual === 'R') movimientoActual = 'L';
        else if (movimientoActual === 'U') movimientoActual = 'D';
        else if (movimientoActual === 'D') movimientoActual = 'U';
        invertir = false;
      }
      let repeticiones = duplicar ? 2 : 1;
      duplicar = false;
      for (let j = 0; j < repeticiones; j++) {
        opciones[movimientoActual]();
      }
      movimientosHechos.add(movimientoActual);
      
      
    
    } else if (moves[i] === 'R') { // ...............R
      if(condicional){
        if(movimientosHechos.has(moves[i])){
          condicional=false;
          continue;
        }else{
          movimientosHechos.add(moves[i]);
          
          opciones['R']();
          condicional=false;
          continue;
        }
      }
      let movimientoActual = moves[i];

    
      if (invertir) {
        if (movimientoActual === 'L') movimientoActual = 'R';
        else if (movimientoActual === 'R') movimientoActual = 'L';
        else if (movimientoActual === 'U') movimientoActual = 'D';
        else if (movimientoActual === 'D') movimientoActual = 'U';
        invertir = false;
      }
      let repeticiones = duplicar ? 2 : 1;
      duplicar = false;
      for (let j = 0; j < repeticiones; j++) {
        opciones[movimientoActual]();
      }
      movimientosHechos.add(movimientoActual);
      
    } else if (moves[i] === 'L') { // ..............L
      if(condicional){
        if(movimientosHechos.has(moves[i])){
          condicional=false;
          continue;
        }else{
          movimientosHechos.add(moves[i]);
         
          opciones['L']();
          condicional=false;
          continue;
        }
      }
      let movimientoActual = moves[i];

    
      if (invertir) {
        if (movimientoActual === 'L') movimientoActual = 'R';
        else if (movimientoActual === 'R') movimientoActual = 'L';
        else if (movimientoActual === 'U') movimientoActual = 'D';
        else if (movimientoActual === 'D') movimientoActual = 'U';
        invertir = false;
      }
      let repeticiones = duplicar ? 2 : 1;
      duplicar = false;
      for (let j = 0; j < repeticiones; j++) {
        opciones[movimientoActual]();
      }
      movimientosHechos.add(movimientoActual);
      
      
    } else if (moves[i] === 'D') { // ........... D
      if(condicional){
        if(movimientosHechos.has(moves[i])){
          condicional=false;
          continue;
        }else{
          movimientosHechos.add(moves[i]);
          
          opciones['D']();
          condicional=false;
          continue;
        }
      }
      let movimientoActual = moves[i];

    
      if (invertir) {
        if (movimientoActual === 'L') movimientoActual = 'R';
        else if (movimientoActual === 'R') movimientoActual = 'L';
        else if (movimientoActual === 'U') movimientoActual = 'D';
        else if (movimientoActual === 'D') movimientoActual = 'U';
        invertir = false;
      }
      let repeticiones = duplicar ? 2 : 1;
      duplicar = false;
      for (let j = 0; j < repeticiones; j++) {
        opciones[movimientoActual]();
      }
      
      movimientosHechos.add(movimientoActual); // 👈 esto es lo nuevo
      
    } else {
      console.log('undefine')
    }


    //  console.log(moves[i])
  }
  if(x === 0 && y === 0) {
    return console.log(true);
  }else{
   console.log(x, y,'U!D')
    
  }
}
//isRobotBack('*UU!U?D') // [0,1]
//isRobotBack('RL')    // true
//isRobotBack('RLUD')  // true
//isRobotBack('*RU')   // [2, 1]
//isRobotBack('R*U')   // [1, 2]
//isRobotBack('LLL!R') // [-4, 0] error
//isRobotBack('R?R')   // [1, 0] error
//isRobotBack('U?D')   // true error
//isRobotBack('R!L')   // [2,0] error
//isRobotBack('U!D')   // [0,2]
//isRobotBack('R?L')   // true
//isRobotBack('U?U')   // [0,1]
//isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

/*
*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.
*/