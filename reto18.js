/*
Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

Ten en cuenta que en la agenda:

Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
El nombre de cada niño está siempre entre < y >
La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados
*/
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

function findInAgenda(agenda, phone) {
  

  const lineas = agenda.split('\n');
  let resultados = [];

  for (const linea of lineas) {
    if (linea.includes(phone)) {
      //console.log(`La línea "${linea}" incluye "${phone}"`);
      // Aquí iría la lógica para extraer el nombre y la dirección de esta línea
      const patronNombreGlobalCaptura = /<([a-zA-Z ]+)>/;
      const patronTelefonoCapturaGlobal= /\+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{3,4}/g
      let nombre = linea.match(patronNombreGlobalCaptura)
      let telefono=linea.match(patronTelefonoCapturaGlobal)
      let newLineaDireccion = linea.replace(telefono,'');

    
      newLineaDireccion= newLineaDireccion.replace(nombre[0],'');
      newLineaDireccion=newLineaDireccion.trim();
      resultados.push({name: nombre[1], address:newLineaDireccion}); 
      
    } 
  }
  if(resultados.length > 1 || resultados.length === 0){
    return console.log(null);
  }else{
    
     return console.log(resultados[0]); //
  }
 




  //console.log(nombres2,resultadoTelefono,lineas)
}


findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados


//findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }