// un array es un objeto que almacena una colección de elementos de forma secuencial, es decir, uno detrás de otro.
// Los elementos de un array pueden ser de cualquier tipo, incluyendo otros arrays.

// Crear un array  
let array = [1, 'hola', true, {nombre: 'Juan'}, [1,2,3]];

// Acceder a un elemento de un array
console.log(array[0]); 

// Modificar un elemento de un array
array[1] = 'mundo';


// metodos mas comunes de array

// .push() -> añade un elemento al final del array
array.push('nuevo elemento');


// Añadir un elemento al final de un array
array.push('nuevo elemento');

// Eliminar el último elemento de un array
array.pop();

// .splice() -> añade o elimina elementos de un array
console.log(array.splice(1, 2)); 

// .slice() -> devuelve una copia de una parte del array
console.log(array.slice(1, 3));

// .every -> devuelve true si todos los elementos del array cumplen una condición
console.log(array.every(elemento => typeof elemento === 'string'));

// .some -> devuelve true si al menos un elemento del array cumple una condición
console.log(array.some(elemento => typeof elemento === 'string'));

//.fill -> rellena un array con un valor estático
console.log(array.fill('nuevo valor'));

//.filter -> crea un nuevo array con todos los elementos que cumplan una condición
console.log(array.filter(elemento => typeof elemento === 'string'));

//.find -> devuelve el primer elemento que cumpla una condición
console.log(array.find(elemento => typeof elemento === 'string'));

//.flat -> aplana un array de arrays    
console.log(array.flat());

//.includes -> devuelve true si un array contiene un elemento
console.log(array.includes('hola'));

//.join -> convierte un array en un string
console.log(array.join(' '));

//.reverse -> invierte un array
console.log(array.reverse());

///                          forma de recorrer un array
// for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for...of
for (let elemento of array) {
    console.log(elemento);
}

// forEach
array.forEach(elemento => console.log(elemento));

// map
array.map(elemento => console.log(elemento));

// el metodo que sigue es util pero lo veremos despues 

//.reduce -> reduce un array a un solo valor
console.log(array.reduce((acumulador, elemento) => acumulador + elemento));
