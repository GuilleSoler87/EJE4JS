// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.

function multip (a,b){

    return a * b
    
    }
    
    console.log(multip(7,2));


// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

// let edad = prompt("Introduce tu edad: ");

// if (edad < 18) {
//     console.log("Eres menor de edad")
// }
// else if (edad < 65) {
//     console.log("Eres mayor de edad")
// } 
// else {
//     console.log ("Eres un adulto mayor")
// }



// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function sumaTresNumeros (a,b,c) {
    if (typeof a !== "number" ||typeof b !== "number" ||typeof c !== "number" ) {
      return "Debo ser ejecutada con números";
    } else {
      return a + b + c;
    }
  }
console.log(sumaTresNumeros(2,6,9))




// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.


function primerosTresCaracteres(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
      } 
      else if (string.length < 3) {
        return string
        } 
        else {
            return string.substring(0, 3);
        }
    }

    console.log(primerosTresCaracteres("Guillermo"))


// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.

  function getPrecioMostrarIVA(precio, IVA = 0.21) {
    if (typeof precio !== "number" || isNaN(precio)) {
      return "no es un formato correcto";
    }
    
    const precioIVA = precio * (1 + IVA);
    const precioTotal = precioIVA.toFixed(2);
    
    return precioTotal + " €";
  }

  console.log(getPrecioMostrarIVA(19.999999))



// EJERCICIOS EXTRAS

// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.

function penultimoCaracter(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
      } 
      else if (string.length < 2) {
        return string.substring(0)
        } 
        else {
            return string.charAt(string.length - 2);
        }
    }

    console.log(penultimoCaracter("Guillermo"))



// Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".

function cuentaVocales(string) {
    if (typeof string !== "string") {
      return "Debo ser ejecutada con un string";
    }
  
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (vocales.includes(string[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }

  console.log(cuentaVocales("Guillermo"))


// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.

function potencia (a,b){

  return a ** b
  
  }
  
  console.log(potencia(10,2));