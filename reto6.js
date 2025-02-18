/*

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false

*/

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

function inBox(box) {
  let hayRegalo=false
  if(box[0] == box[box.length-1]){
   // console.log(arr[0],arr[arr.length-1],arr.length-1)
    for(let i=1;i<box.length-1;i++){
      if(box[i][0] == box[i][box[i].length-1]){
       // console.log("por aqui pase")
        for(let j=0;j<box[i].length-1;j++){
          if(box[i][j] == "*"){
             hayRegalo=true          }
        }
      }else{
        return false;
      }
    }
   }else{
     return false;
   }
   if(hayRegalo){
     return console.log(true);
   }else{
     return console.log(false);
   }

}

     
