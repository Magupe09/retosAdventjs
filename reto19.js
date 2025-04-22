/*
¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.

Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:

    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|

// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.

Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.

distributeWeight(1)
// Devuelve:
//  _
// |_|

distributeWeight(2)
// Devuelve:
//  ___
// |___|

distributeWeight(3)
// Devuelve:
//  _
// |_|_
// |___|

distributeWeight(4)
// Devuelve:
//  ___
// |___|
// |___|

distributeWeight(5)
// Devuelve:
//  _____
// |     |
// |_____|

distributeWeight(6)
// Devuelve:
//  _
// |_|___
// |     |
// |_____|
Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
*/
const boxRepresentations = {
    1: [" _ ", "|_|"] ,
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }
function distributeWeight(weight) {
    let lineasDibujoFinal = [];
    let pesos=[10,5,2,1];
    let cajas=[]
    let resta=weight;
    let dibujo="";
  
    for(i=0; i<= pesos.length -1 ; i++){
        while(resta >= pesos[i]){
       
            cajas.push(pesos[i]);
            resta= resta - pesos[i];
        }
    }


    cajas.sort((a, b) => a - b)
    for(j=0; j < cajas.length ;j++){
        
        
            let currentBoxLines = boxRepresentations[cajas[j]];
            if(j === cajas.length - 1){
                for(z=0;z<currentBoxLines.length;z++){
                    lineasDibujoFinal.push(currentBoxLines[z])
                    
                }
            }else{
                for(z=0;z<currentBoxLines.length-1;z++){
                    lineasDibujoFinal.push(currentBoxLines[z])
                    
                }
                
            }
           
       //console.log(currentBoxLines)
       
    }
    
    return console.log(lineasDibujoFinal.join('\n'),cajas);
  }

  distributeWeight(6)
  // Devuelve:
  //  _
  // |_|___
  // |     |
  // |_____|