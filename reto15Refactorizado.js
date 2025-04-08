function drawTable(data) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
  
    const claves = Object.keys(data[0]).map(capitalize);
    const valores = data.flatMap(obj => Object.values(obj).map(String));
  
    // Obtener el ancho máximo por columna
    const anchoCol1 = Math.max(claves[0].length, ...data.map(obj => String(Object.values(obj)[0]).length));
    const anchoCol2 = Math.max(claves[1].length, ...data.map(obj => String(Object.values(obj)[1]).length));
  
    const borde = `+${'-'.repeat(anchoCol1 + 2)}+${'-'.repeat(anchoCol2 + 2)}+`;
  
    const fila = (a, b) =>
      `| ${a}${' '.repeat(anchoCol1 - a.length)} | ${b}${' '.repeat(anchoCol2 - b.length)} |`;
  
    const filas = [
      fila(claves[0], claves[1]),
      ...data.map(obj => fila(String(Object.values(obj)[0]), String(Object.values(obj)[1])))
    ];
  
    const tabla = [borde, ...filas.slice(0, 1), borde, ...filas.slice(1), borde].join('\n');
    console.log(tabla);
  }
  
  
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
  ])

  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
  ])