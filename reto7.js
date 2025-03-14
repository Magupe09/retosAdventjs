/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

*/
function fixPackages(packages) {
    let arr=packages.split('')
    
 while (arr.includes('(') || arr.includes(')') ){
      let posicionesAper=[]
      let posicionesCie=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=='('){
           posicionesAper.push(i)
        }else if(arr[i]==')'){
          posicionesCie.push(i)
        }
    }
    let inicio = posicionesAper[posicionesAper.length - 1] + 1;
    let fin = posicionesCie[0] - 1;
    let cadenaInterna = arr.slice(inicio,fin +1).reverse().join('')
    //console.log(cadenaInterna)
    arr.splice(inicio, fin - inicio + 1, ...cadenaInterna);
    console.log(inicio,fin)
    arr.splice(inicio -1 ,1)
    arr.splice(fin ,1)
    console.log(arr,"aqui")
  }
  
  let arr2 =arr.join('')
  console.log(typeof(arr2))
    

  }
  //fixPackages('abc(def(gh)i)jk') //"abcighfedjk"
  fixPackages('a(b(c))e')  // ➞ "acbe"
  fixPackages('a(cb)de') // ➞ "abcde"