function detectBombsRefactored(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(0));
  
    const checkNeighbors = (r, c) => {
      let count = 0;
      for (let i = Math.max(0, r - 1); i <= Math.min(rows - 1, r + 1); i++) {
        for (let j = Math.max(0, c - 1); j <= Math.min(cols - 1, c + 1); j++) {
          if ((i !== r || j !== c) && grid[i][j]) {
            count++;
          }
        }
      }
      return count;
    };
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newGrid[i][j] = checkNeighbors(i, j);
      }
    }
  
    return console.log(newGrid, 'grid final refactorizado');
  }
  
  detectBombsRefactored([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ]);
  
  detectBombsRefactored([
    [true, false],
    [false, false]
  ]);
  
  detectBombsRefactored([
    [true, true],
    [false, false],
    [true, true]
  ]);