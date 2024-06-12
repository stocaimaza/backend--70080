//Dato = unidad minima de informacion. 

//Los datos los podemos dividir en dos grandes grupos: 

//1) Datos primitivos. 

//Tipo Number: 

8789464
45664.644

//Datos numericos que pueden ser enteros o decimales. A los decimales los llamamos tambien "punto flotante". Este tipo de dato esta destinado a operaciones matemáticas. 

//Tipo String: 

// "Esto es un string"
// //'Esto tambien es un string'
// `alt + 96 `
// "12345678"


//Los strings son cadenas de texto. Se pueden escribir con comillas dobles o simples. 

//Tipos Booleanos: 

true //verdadero
false  //falso

//Los usamos generalmente para tomar decisiones en nuestro codigo junto a bucles y condicionales. 

//Tipo undefined
undefined

//"Indefinido", es un valor que se le asigna a una variable cuando se le ha asignado ningún valor. 

//Tipo Null: 

null

//Es un valor que se le asigna a una variable cuando queremos que no tenga ningun valor. Es la ausencia intencional de un valor. 

//VARIABLES: es un espacio de memoria que almacena información importante para la aplicacion, y como su nombre lo indica puede modificarse en el tiempo.

//Declarar una variable: 

let alumno; 


//Asignamos un valor a la variable alumno: 

alumno = "Tinki Winki";

console.log(alumno);

//Podemos hacer estos dos pasos en uno: 

//Inicializar una variable: 

let profesor = "Dipsi";

console.log(profesor);

profesor = 10;

console.log(typeof profesor);

//Las constantes: son variables que no pueden cambiar su valor. Se declaran con la palabra reservada "const". Una vez que se le asigna un valor, no se le puede asignar otro. 

const nacimiento = 1997; 
//nacimiento = 1987; 
console.log(nacimiento);

//Tipo Object: 

let cliente = {
    nombre: "Pepe",
    apellido: "Argento",
    edad: 50
}

console.log(cliente);

console.log(cliente.edad);
console.log(cliente["apellido"]);


//Tipo Array: 

let numeros = [10, 15, "20", 25, true];

console.log(numeros);

//El Array se organiza en indices, empezando siempre desde el 0. 
