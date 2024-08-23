
/// doc https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//un string es un tipo de dato que se utiliza para almacenar texto
//se puede definir un string de dos formas
//con comillas simples
let nombre = 'Juan';

//con comillas dobles
let apellido = "Perez";

//con comillas invertidas
let nombreCompleto = `Juan Perez`;

//concatenacion de strings
let nombreCompleto2 = nombre + ' ' + apellido;


//interpolacion de strings
let nombreCompleto3 = `${nombre} ${apellido}`;
console.log(nombreCompleto3);

//longitud de un string
let longitud = nombre.length;
console.log(longitud);

//metodos mas comunes de strings

//toUpperCase
let nombreMayusculas = nombre.toUpperCase();
console.log(nombreMayusculas);

//toLowerCase
let nombreMinusculas = nombre.toLowerCase();
console.log(nombreMinusculas);

//indexOf devuelve la primera posicion de la primera coincidencia   
let posicion = nombre.indexOf('a');
console.log(posicion);
 
//lastIndexOf devuelve la ultima posicion de la primera coincidencia
let ultimaPosicion = nombre.lastIndexOf('a');
console.log(ultimaPosicion);

//slice devuelve una subcadena de un string
let subString = nombre.slice(1,3);
console.log(subString);

//split devuelve un array de strings
let array = nombre.split('');
console.log(array);

//replace devuelve una nueva cadena de texto con alguna o todas las coincidencias de un patron
let nuevoNombre = nombre.replace('a', 'e');
console.log(nuevoNombre);
//usando replace con expreciones regulares
let nuevoNombre2 = nombre.replace(/a/g, 'e');
console.log(nuevoNombre2);


//includes   no acepta expresiones regulares y devuelve un booleano
let incluye = nombre.includes('a');
console.log(incluye);

//trim
let nombreConEspacios = '   Juan   ';
let nombreSinEspacios = nombreConEspacios.trim();
console.log(nombreSinEspacios);