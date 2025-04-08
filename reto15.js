/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

*/
function drawTable(data) {
    let palabraMasLarga = []
    let table='';

    const claves = data.flatMap(obj => Object.keys(obj));
    const valores = data.flatMap(obj => Object.values(obj)).map(String);
    
    
    const maxClave = claves.reduce((mayor, actual) => {
        return actual.length > mayor.length ? actual : mayor;
    });
    const maxValor = valores.reduce((mayor, actual) => {
        return actual.length > mayor.length ? actual : mayor;
    });
    palabraMasLarga = maxClave.length >= maxValor.length ? maxClave : maxValor;


    console.log(maxClave, 'clave', claves);
    console.log(maxValor, 'valor', valores);
    console.log(palabraMasLarga)
    table='+'+'-'.repeat(palabraMasLarga.length +2)  + '+' +'-'.repeat(palabraMasLarga.length +2) +'+' + "\n" + '/' + ' ' + claves[0] + ' '.repeat((palabraMasLarga.length - claves[0].length)) +' ' + '/'+ ' ' + claves[1] + ' ' + ' '.repeat((palabraMasLarga.length - claves[1].length)) + '/'+"\n" + '+'+'-'.repeat(palabraMasLarga.length +2)  + '+' +'-'.repeat(palabraMasLarga.length +2) +'+' + "\n" + '/' + ' ' + valores[0]  + ' '.repeat((palabraMasLarga.length - valores[0].length))+' ' +'/'  + ' ' + valores[1] + ' ' + ' '.repeat((palabraMasLarga.length - valores[1].length)) +'/' + "\n" + '/' + ' ' + valores[2]  + ' '.repeat((palabraMasLarga.length - valores[2].length))+' ' +'/'  + ' ' + valores[3] + ' ' + ' '.repeat((palabraMasLarga.length - valores[3].length)) +'/' + "\n" + '/' + ' ' + valores[4]  + ' '.repeat((palabraMasLarga.length - valores[4].length))+' ' +'/'  + ' ' + valores[5] + ' ' + ' '.repeat((palabraMasLarga.length - valores[5].length)) +'/' + "\n"+'+'+'-'.repeat(palabraMasLarga.length +2)  + '+' +'-'.repeat(palabraMasLarga.length +2) +'+' + "\n"  ;


    return console.log(table) 

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