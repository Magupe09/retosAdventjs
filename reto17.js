/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉


*/
function detectBombs(grid) {
  let newGrid = [];

  for (let i = 0; i <= grid.length - 1; i++) {
    let filas=[];
    for (let j = 0; j <= grid[i].length - 1; j++) {

      if (grid[i][j] === true) {
        console.log('true')
        
        let bombas1 = 0;
        
        //abajo
        if (i + 1 >= 0 && i + 1 < grid.length && j >= 0 && j < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j] === true) {
            bombas1++;
          }
        }
        //arriba
        if (i - 1 >= 0 && i - 1 < grid.length && j >= 0 && j < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j] === true) {
            bombas1++;
          }
        }
        //Izquierda
        if (i >= 0 && i < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i][j - 1] === true) {
            bombas1++;
          }
        }
        //Derecha
        if (i >= 0 && i < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i][j + 1] === true) {
            bombas1++;
          }
        }
        //Diagonal Superior Izquierda
        if (i - 1 >= 0 && i - 1 < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j - 1] === true) {
            bombas1++;
          }
        }
        //Diagonal Superior Derecha
        if (i - 1 >= 0 && i - 1 < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j + 1] === true) {
            bombas1++;
          }
        }
        //Diagonal Inferior Izquierda
        if (i + 1 >= 0 && i + 1 < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j - 1] === true) {
            bombas1++;
          }
        }
        //Diagonal Inferior Derecha
        if (i + 1 >= 0 && i + 1 < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j + 1] === true) {
            bombas1++;
          }
        }

      
      filas.push(bombas1)
      } else {
        let bombas = 0;
        
        //abajo
        if (i + 1 >= 0 && i + 1 < grid.length && j >= 0 && j < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j] === true) {
            bombas++;
          }
        }
        //arriba
        if (i - 1 >= 0 && i - 1 < grid.length && j >= 0 && j < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j] === true) {
            bombas++;
          }
        }
        //Izquierda
        if (i >= 0 && i < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i][j - 1] === true) {
            bombas++;
          }
        }
        //Derecha
        if (i >= 0 && i < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i][j + 1] === true) {
            bombas++;
          }
        }
        //Diagonal Superior Izquierda
        if (i - 1 >= 0 && i - 1 < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j - 1] === true) {
            bombas++;
          }
        }
        //Diagonal Superior Derecha
        if (i - 1 >= 0 && i - 1 < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i - 1][j + 1] === true) {
            bombas++;
          }
        }
        //Diagonal Inferior Izquierda
        if (i + 1 >= 0 && i + 1 < grid.length && j - 1 >= 0 && j - 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j - 1] === true) {
            bombas++;
          }
        }
        //Diagonal Inferior Derecha
        if (i + 1 >= 0 && i + 1 < grid.length && j + 1 >= 0 && j + 1 < grid[i].length) {
          // Aquí dentro, sabemos que las coordenadas (i + 1, j) son válidas
          // Ahora podemos verificar si hay una bomba:
          if (grid[i + 1][j + 1] === true) {
            bombas++;
          }
        }

      console.log(bombas)
      filas.push(bombas)
      
       
      }
      
     
    }
    newGrid.push(filas)

  }

  return console.log(newGrid,'grid final')
}



detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]
