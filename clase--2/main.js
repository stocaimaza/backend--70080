/** CLASE 2 - NUEVAS FUNCIONALIDADES DE ECMASCRIPT  **/

//Objetivos de la clase: 

// - Conocer las caracteristicas de EcmaScript en sus ultimas versiones. 
// - Aplicar los conceptos incorporados al desarrollo backend. 

//ES7: Esta version fue lanzada en el año 2016- 
//Tiene dos grandes cambios: 
// - Operador de potencia ** 
// - Includes: Permite saber si hay un elemento dentro de un array o un string. 

//Antes de ES7: 

let base = 4; 
let exponente = 3; 

let resultado = Math.pow(base, exponente); 
console.log(resultado);

//Recordemos que Math es un objeto que tiene propiedades y métodos para realizar operaciones matemáticas. 

//Con ES7: 

let resultado2 = base ** exponente; 
console.log(resultado2);

//Includes: me retorna un booleano

const losTeletubbies = ["dipsi", "lala", "po", "tinkiwinki"];

console.log(losTeletubbies.includes("solcito")); 

//Antes de ES7 acostumbamos usar el indexOf. 

console.log(losTeletubbies.indexOf("solcito") > -1);

let frase = "Hola, soy tinki winki"; 
console.log(frase.includes("lala")); 


//Cambios en ES8: 
//Fue lanzada en el año 2017. 
//Uno de los cambios fue la llegada de async y await, pero lo veremos la proxima clase. 

const empleado = {
    nombre: "Pepe",
    apellido: "Argento",
    edad: 45,
    puesto: "Vendedor"
}; 

//Object.values = devuelve un array con los valores de las propiedades de un objeto. 

const resultadoEmpleadoValues = Object.values(empleado); 
console.log(resultadoEmpleadoValues); 

//Object.keys = devuelve un array con las claves de un objeto. 
const resultadoEmpleadoKeys = Object.keys(empleado);
console.log(resultadoEmpleadoKeys); 

//Object.entries: devuelve un array de arrays, donde cada sub-array contiene la clave y valor: 

const resultadoEmpleadoEntries = Object.entries(empleado);
console.log(resultadoEmpleadoEntries);

//Padding: nos permite añadir cadenas vacias o caracteres a un string. 
let texto = "Hola"; 

console.log(texto.padStart(8," "));

console.log(texto.padEnd(8," ")); "Hola    "; 

//ES9: 
//La version 9 llega en el año 2018. 
//Acá se mejoró el manejo de "promesas" al incorporar el método "finally()". Recuerden que este se ejecuta siempre, se cumpla o no la promesa. 

//Spread Operator: Operador de propagacion: Nos permite desparramar los elementos de un iterable (array u objeto) de forma individual, a otro contexto. Ese contexto puede ser un array, un objeto o alguna funcion. 

let arrayNombres = ["Cristian", 100, "Pablo", true]; 

console.log(...arrayNombres)

//Hace algo muy parecido a esto: 
console.log(arrayNombres[0], arrayNombres[1], arrayNombres[2], arrayNombres[3]);

//¿En que casos lo voy a usar? 

//Copia de objetos: 

const coky = {
    nombre: "Coky",
    apellido: "Argento", 
    edad: 17
}

//const coky2 = coky; 
//No copiamos objetos asi. Porque igualamos la referencia en memoria. 


//Como deberiamos copiar objetos: 
const coky2 = {...coky};

coky.edad = 37;

console.log(coky);
console.log(coky2);

//Podemos usarlo para concatenar algun array: 

let numeros1 = [1,2,3,4,5];
let numeros2 = [6,7,8,9,10]; 

let numerosConcatenados = [...numeros1, ...numeros2];
console.log(numerosConcatenados);

//DESESTRUCTURACION: esta herramienta nos permite extraer datos de un array u objeto de manera mas simple y legible. 

const pelicula = {
    titulo: "El Padrino", 
    director: "Francis Ford Coppola", 
    genero: "Drama", 
    lanzamiento: 1972
}

//Antes:

let titulo = pelicula.titulo; 
console.log(titulo);

//Ahora: 

let {titulo:tituloPeli, director, genero, lanzamiento} = pelicula; 

console.log(director); 
console.log(genero); 
console.log(tituloPeli);
tituloPeli = "Titanic";
console.log(pelicula); 

//Ejemplo con Arrays: 

const numeritos = [1, 2, 3, 4, 5];


let [ ,,, tres, cuatro] = numeritos; 

console.log(tres);

//ACCESO CONDICIONAL A UN OBJETO. 

//Estoy esperando de una BASE DE DATOS, API... etc. 

let cliente = null; 


console.log(cliente?.nombre);

//alert("Se rompe todo!");

//Nullish Coalescing: Nos permite establecer un valor por defecto cuando tenemos un valor nulo o indefinido: 

let cliente2 = null; 
console.log(cliente2 ?? "Anonimo"); 






