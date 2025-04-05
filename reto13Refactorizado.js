function isRobotBack(moves) {
    let x = 0, y = 0;
    let invertir = false, duplicar = false, condicional = false;
    const movimientosHechos = new Set();
  
    const opciones = {
      R: () => x++,
      L: () => x--,
      U: () => y++,
      D: () => y--
    };
  
    const invertirMovimiento = (dir) => ({ R: 'L', L: 'R', U: 'D', D: 'U' })[dir];
  
    for (let i = 0; i < moves.length; i++) {
      const dir = moves[i];
  
      if (dir === '*') {
        duplicar = true;
      } else if (dir === '!') {
        invertir = true;
      } else if (dir === '?') {
        condicional = true;
      } else if ('RLUD'.includes(dir)) {
        let movimientoActual = dir;
  
        if (invertir) {
          movimientoActual = invertirMovimiento(movimientoActual);
          invertir = false;
        }
  
        if (condicional) {
          condicional = false;
          if (movimientosHechos.has(movimientoActual)) continue;
        }
  
        const repeticiones = duplicar ? 2 : 1;
        duplicar = false;
  
        for (let j = 0; j < repeticiones; j++) {
          opciones[movimientoActual]();
        }
  
        movimientosHechos.add(movimientoActual);
      } else {
        console.log('undefined');
      }
    }
  
    if (x === 0 && y === 0) {
      return console.log(true);
    } else {
      return console.log([x,y]);
    }
  }
  
isRobotBack('*UU!U?D') // [0,1]
//isRobotBack('RL')    // true
//isRobotBack('RLUD')  // true
//isRobotBack('*RU')   // [2, 1]
//isRobotBack('R*U')   // [1, 2]
//isRobotBack('LLL!R') // [-4, 0] error
//isRobotBack('R?R')   // [1, 0] error